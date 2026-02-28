import { useState } from 'react';
import { schedule, getScheduleByPool } from '../data/schedule';
import { getTeamByCode } from '../data/teams';
import styles from './Schedule.module.css';

const POOLS = ['全部', 'A', 'B', 'C', 'D'];

function GameCard({ game }) {
  const home = getTeamByCode(game.home);
  const away = getTeamByCode(game.away);

  return (
    <div className={styles.gameCard}>
      <div className={styles.gameMeta}>
        <span className={`badge badge-pool-${game.pool}`}>Pool {game.pool}</span>
        <span className={styles.gameTime}>{game.date} {game.time}</span>
      </div>
      <div className={styles.gameTeams}>
        <div className={styles.teamSide}>
          <span className={styles.teamFlag}>{home?.flag}</span>
          <span className={styles.teamName}>{home?.nameZh}</span>
          <span className={styles.teamCode}>{game.home}</span>
        </div>
        <div className={styles.vs}>VS</div>
        <div className={`${styles.teamSide} ${styles.teamSideRight}`}>
          <span className={styles.teamCode}>{game.away}</span>
          <span className={styles.teamName}>{away?.nameZh}</span>
          <span className={styles.teamFlag}>{away?.flag}</span>
        </div>
      </div>
      <div className={styles.gameVenue}>📍 {game.venue}</div>
    </div>
  );
}

export default function Schedule() {
  const [activePool, setActivePool] = useState('全部');

  const games = activePool === '全部' ? schedule : getScheduleByPool(activePool);

  // group by date
  const byDate = games.reduce((acc, g) => {
    if (!acc[g.date]) acc[g.date] = [];
    acc[g.date].push(g);
    return acc;
  }, {});

  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>賽程表</h1>
      <p className={styles.subtitle}>組別賽：2026年3月5日 – 3月9日</p>

      <div className={styles.tabs}>
        {POOLS.map((p) => (
          <button
            key={p}
            className={`${styles.tab} ${activePool === p ? styles.tabActive : ''}`}
            onClick={() => setActivePool(p)}
          >
            {p === '全部' ? '全部' : `Pool ${p}`}
          </button>
        ))}
      </div>

      {Object.entries(byDate).map(([date, dayGames]) => (
        <div key={date} className={styles.dayGroup}>
          <h2 className={styles.dayTitle}>{date}</h2>
          <div className={styles.dayGames}>
            {dayGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
