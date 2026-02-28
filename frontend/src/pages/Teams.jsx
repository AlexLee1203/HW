import { useState } from 'react';
import { teams, POOL_VENUES } from '../data/teams';
import styles from './Teams.module.css';

const POOLS = ['全部', 'A', 'B', 'C', 'D'];

export default function Teams() {
  const [activePool, setActivePool] = useState('全部');

  const filtered = activePool === '全部'
    ? teams
    : teams.filter((t) => t.pool === activePool);

  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>參賽隊伍</h1>
      <p className={styles.subtitle}>2026 WBC 共 20 支國家/地區隊伍參賽</p>

      {/* Filter tabs */}
      <div className={styles.tabs}>
        {POOLS.map((p) => (
          <button
            key={p}
            className={`${styles.tab} ${activePool === p ? styles.tabActive : ''}`}
            onClick={() => setActivePool(p)}
          >
            {p === '全部' ? '全部' : `Pool ${p}`}
            {p !== '全部' && (
              <span className={styles.tabVenue}>
                {POOL_VENUES[p].city}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Team grid */}
      <div className={styles.grid}>
        {filtered.map((team) => (
          <div key={team.id} className={styles.card}>
            <div className={styles.cardFlag}>{team.flag}</div>
            <div className={styles.cardInfo}>
              <div className={styles.cardName}>{team.nameZh}</div>
              <div className={styles.cardNameEn}>{team.name}</div>
              <div className={styles.cardMeta}>
                <span className={`badge badge-pool-${team.pool}`}>Pool {team.pool}</span>
                {team.champion && (
                  <span className="badge badge-champion">🏆 衛冕冠軍</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
