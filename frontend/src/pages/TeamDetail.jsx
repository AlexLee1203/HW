import { useParams, Link } from 'react-router-dom';
import { getTeamByCode } from '../data/teams';
import { getPlayersByTeam } from '../data/players';
import styles from './TeamDetail.module.css';

const POOL_COLORS = {
  A: '#1a3a6b',
  B: '#3a1a1a',
  C: '#1a3a2a',
  D: '#3a2a1a',
};

const AVATAR_BG = [
  '#1a3a6b', '#3a1a1a', '#1a3a2a', '#3a2a1a',
  '#2a1a3a', '#1a2a3a', '#3a3a1a', '#1a3a3a',
];

function avatarBg(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xffff;
  return AVATAR_BG[h % AVATAR_BG.length];
}

function attrColor(v) {
  if (v >= 85) return '#22c55e';
  if (v >= 70) return '#f59e0b';
  return '#ef4444';
}

const BATTER_ATTRS = [
  { key: 'contact', label: '打擊' },
  { key: 'power', label: '長打' },
  { key: 'speed', label: '速度' },
  { key: 'defense', label: '守備' },
  { key: 'arm', label: '臂力' },
];

const PITCHER_ATTRS = [
  { key: 'velocity', label: '球速' },
  { key: 'control', label: '控球' },
  { key: 'stuff', label: '球路' },
  { key: 'stamina', label: '耐力' },
];

function PlayerCard({ player }) {
  const photoUrl = player.mlbId
    ? `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/${player.mlbId}/headshot/67/current`
    : null;

  const attrs = player.type === 'pitcher' ? PITCHER_ATTRS : BATTER_ATTRS;
  const initials = player.name.split(' ').map((w) => w[0]).slice(0, 2).join('');

  return (
    <div className={styles.playerCard}>
      <div className={styles.playerCardTop}>
        {photoUrl ? (
          <img
            className={styles.playerPhoto}
            src={photoUrl}
            alt={player.name}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div
          className={styles.playerAvatar}
          style={{
            background: avatarBg(player.name),
            display: photoUrl ? 'none' : 'flex',
          }}
        >
          {initials}
        </div>
        <div className={styles.playerMeta}>
          <div className={styles.playerNumber}>#{player.number}</div>
          <div className={styles.playerName}>{player.nameZh}</div>
          <div className={styles.playerNameEn}>{player.name}</div>
          <div className={styles.playerBadges}>
            <span className={styles.badgePos}>{player.positionZh}</span>
            <span className={styles.badgeClub} title={player.club}>{player.club}</span>
          </div>
        </div>
      </div>

      <div className={styles.playerAttrs}>
        {attrs.map(({ key, label }) => {
          const v = player.attributes?.[key] ?? 0;
          return (
            <div key={key} className={styles.attrRow}>
              <span className={styles.attrLabel}>{label}</span>
              <div className={styles.attrBarBg}>
                <div
                  className={styles.attrBar}
                  style={{ width: `${v}%`, background: attrColor(v) }}
                />
              </div>
              <span className={styles.attrValue} style={{ color: attrColor(v) }}>{v}</span>
            </div>
          );
        })}
      </div>

      {player.highlights?.length > 0 && (
        <div className={styles.playerHighlights}>
          {player.highlights.map((h, i) => (
            <div key={i} className={styles.highlight}>{h}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TeamDetail() {
  const { code } = useParams();
  const team = getTeamByCode(code);

  if (!team) {
    return (
      <main className={`container ${styles.page}`}>
        <Link to="/teams" className={styles.back}>← 返回隊伍列表</Link>
        <p>找不到該隊伍。</p>
      </main>
    );
  }

  const players = getPlayersByTeam(code);
  const pitchers = players.filter((p) => p.type === 'pitcher');
  const batters = players.filter((p) => p.type === 'batter');

  return (
    <main className={`container ${styles.page}`}>
      <Link to="/teams" className={styles.back}>← 返回隊伍列表</Link>

      {/* Team header */}
      <div className={styles.header}>
        <div className={styles.headerFlag}>{team.flag}</div>
        <div className={styles.headerInfo}>
          <div className={styles.headerName}>{team.nameZh}</div>
          <div className={styles.headerNameEn}>{team.name}</div>
          <div className={styles.headerBadges}>
            <span className={`badge badge-pool-${team.pool}`}>Pool {team.pool}</span>
            {team.champion && <span className="badge badge-champion">🏆 衛冕冠軍</span>}
          </div>
        </div>
        <div className={styles.headerStats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>#{team.worldRanking}</span>
            世界排名
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{players.length}</span>
            登錄球員
          </div>
        </div>
      </div>

      {/* Pitchers */}
      {pitchers.length > 0 && (
        <>
          <div className={styles.sectionTitle}>⚾ 投手陣容</div>
          <div className={styles.playerGrid}>
            {pitchers.map((p) => <PlayerCard key={p.id} player={p} />)}
          </div>
        </>
      )}

      {/* Batters */}
      {batters.length > 0 && (
        <>
          <div className={styles.sectionTitle}>🏏 野手陣容</div>
          <div className={styles.playerGrid}>
            {batters.map((p) => <PlayerCard key={p.id} player={p} />)}
          </div>
        </>
      )}

      {players.length === 0 && (
        <p style={{ color: 'var(--color-text-muted)' }}>球員名單尚未公布。</p>
      )}
    </main>
  );
}
