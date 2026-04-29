import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.inner}`}>
        <div><div className={s.brand}>Stress Free Staffing & Events</div><div className={s.copy}>&copy; {new Date().getFullYear()} Stress Free Group LLC. All Rights Reserved.</div></div>
        <div className={s.links}>
          <a href="https://www.StressFreeGroup.com" target="_blank" rel="noreferrer">Stress Free Group</a>
          <a href="https://stressfreervs.com" target="_blank" rel="noreferrer">Stress Free RVs</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
