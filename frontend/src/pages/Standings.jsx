import { teams, POOL_VENUES } from '../data/teams';
import styles from './Standings.module.css';

const POOLS = ['A', 'B', 'C', 'D'];

// 靜態初始積分（賽前全部為 0）
const initialStandings = teams.map((team) => ({
  ...team,
  w: 0, l: 0, gb: 0, ra: 0, runs: 0,
}));

function StandingsTable({ pool }) {
  const poolTeams = initialStandings.filter((t) => t.pool === pool);
  const venue = POOL_VENUES[pool];

  return (
    <div className={styles.tableWrap}>
      <div className={styles.tableHeader}>
        <h2 className={styles.poolTitle}>
          <span className={`badge badge-pool-${pool}`}>Pool {pool}</span>
          <span className={styles.venueLabel}>📍 {venue.city}，{venue.country}</span>
        </h2>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.thTeam}>隊伍</th>
            <th>勝</th>
            <th>敗</th>
            <th>勝率</th>
            <th className={styles.thHide}>得分</th>
            <th className={styles.thHide}>失分</th>
          </tr>
        </thead>
        <tbody>
          {poolTeams.map((team, idx) => (
            <tr key={team.id} className={idx % 2 === 0 ? styles.rowEven : ''}>
              <td className={styles.tdTeam}>
                <span className={styles.rank}>{idx + 1}</span>
                <span className={styles.flag}>{team.flag}</span>
                <span className={styles.nameZh}>{team.nameZh}</span>
                <span className={styles.nameEn}>{team.name}</span>
                {team.champion && <span className="badge badge-champion">衛冕</span>}
              </td>
              <td className={styles.num}>{team.w}</td>
              <td className={styles.num}>{team.l}</td>
              <td className={styles.num}>—</td>
              <td className={`${styles.num} ${styles.thHide}`}>{team.runs}</td>
              <td className={`${styles.num} ${styles.thHide}`}>{team.ra}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.note}>⏳ 賽事尚未開始，積分將於比賽後更新</p>
    </div>
  );
}

export default function Standings() {
  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>積分榜</h1>
      <p className={styles.subtitle}>組別賽積分排行（2026年3月5日 – 3月9日）</p>
      <div className={styles.grid}>
        {POOLS.map((pool) => (
          <StandingsTable key={pool} pool={pool} />
        ))}
      </div>
    </main>
  );
}
