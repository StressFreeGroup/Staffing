import { useState, useEffect } from 'react'
import s from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={`container ${s.inner}`}>
        <a href="#" className={s.logo}>
          <div className={s.icon}>SF</div>
          <div className={s.text}>Stress Free<span>Staffing & Events</span></div>
        </a>
        <ul className={`${s.links} ${open ? s.open : ''}`}>
          {['About','Services','Staffing','Process','Testimonials'].map(i => (
            <li key={i}><a href={`#${i.toLowerCase()}`} onClick={() => setOpen(false)}>{i}</a></li>
          ))}
          <li><a href="#contact" className={s.cta} onClick={() => setOpen(false)}>Get Started</a></li>
        </ul>
        <button className={s.burger} onClick={() => setOpen(!open)} aria-label="Menu"><span/><span/><span/></button>
      </div>
    </nav>
  )
}
