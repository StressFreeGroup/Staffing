import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.brand}>Stress Free Staffing & Events</div>
          <div className={styles.copy}>&copy; {new Date().getFullYear()} Stress Free Group LLC. All Rights Reserved. A Stress Free Group Company.</div>
        </div>
        <div className={styles.links}>
          <a href="https://www.StressFreeGroup.com" target="_blank" rel="noreferrer">Stress Free Group</a>
          <a href="https://stressfreervs.com" target="_blank" rel="noreferrer">Stress Free RVs</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
