import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { to: '/', label: '首頁' },
  { to: '/teams', label: '隊伍' },
  { to: '/schedule', label: '賽程' },
  { to: '/standings', label: '積分榜' },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoIcon}>⚾</span>
          <span>
            <span className={styles.logoWBC}>WBC</span>
            <span className={styles.logoYear}> 2026</span>
          </span>
        </NavLink>

        <nav className={styles.nav}>
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
