import { Link } from 'react-router-dom';
import { teams, POOL_VENUES } from '../data/teams';
import styles from './Home.module.css';

const POOLS = ['A', 'B', 'C', 'D'];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.heroEyebrow}>2026 · World Baseball Classic</p>
          <h1 className={styles.heroTitle}>
            世界棒球<br />
            <span className={styles.heroHighlight}>經典賽</span>
          </h1>
          <p className={styles.heroSub}>
            2026年3月5日 – 3月17日｜20支頂尖球隊，角逐世界冠軍
          </p>
          <div className={styles.heroBtns}>
            <Link to="/schedule" className={styles.btnPrimary}>查看賽程</Link>
            <Link to="/teams" className={styles.btnSecondary}>認識隊伍</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { value: '20', label: '參賽隊伍' },
              { value: '4', label: '分組賽場' },
              { value: '13', label: '賽事天數' },
              { value: '2026', label: '年份' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.statCard}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pools overview */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>分組總覽</h2>
          <div className={styles.poolsGrid}>
            {POOLS.map((pool) => {
              const venue = POOL_VENUES[pool];
              const poolTeams = teams.filter((t) => t.pool === pool);
              return (
                <div key={pool} className={`${styles.poolCard} ${styles[`pool${pool}`]}`}>
                  <div className={styles.poolHeader}>
                    <span className={styles.poolLabel}>Pool {pool}</span>
                    <span className={styles.poolVenue}>{venue.city}，{venue.country}</span>
                  </div>
                  <ul className={styles.poolTeams}>
                    {poolTeams.map((team) => (
                      <li key={team.id} className={styles.poolTeamRow}>
                        <span>{team.flag}</span>
                        <span>{team.nameZh}</span>
                        {team.champion && (
                          <span className="badge badge-champion">衛冕</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={styles.moreLink}>
            <Link to="/teams" className={styles.btnOutline}>查看所有隊伍 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
