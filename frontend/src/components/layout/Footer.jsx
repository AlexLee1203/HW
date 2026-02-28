import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>⚾ 2026 World Baseball Classic</span>
        <span className={styles.muted}>賽事時間：2026年3月5日 – 3月17日</span>
        <span className={styles.muted}>本網站為學習專案，非官方網站</span>
      </div>
    </footer>
  );
}
