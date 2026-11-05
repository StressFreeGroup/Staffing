import { useState, useEffect } from 'react'
import s from './Navbar.module.css'

const links = [['Work', 'work'], ['Services', 'services'], ['Staffing', 'staffing'], ['Process', 'process'], ['Clients', 'clients']]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={`container ${s.inner}`}>
        <a href="#top" className={s.logo} aria-label="Stress Free Staffing — home">
          <img src="/brand/logo-wordmark.webp" alt="Stress Free Staffing Nationwide" width="560" height="189" />
        </a>
        <nav aria-label="Primary">
          <ul id="nav-menu" className={`${s.links} ${open ? s.open : ''}`}>
            {links.map(([label, id]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>
            ))}
            <li><a href="#contact" className={`btn btnPrimary ${s.cta}`} onClick={() => setOpen(false)}>Request a Quote</a></li>
          </ul>
        </nav>
        <button className={`${s.burger} ${open ? s.x : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="nav-menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
