import { useState, useEffect, useRef } from 'react'
import s from './Navbar.module.css'

const links = [['Work', 'work'], ['Services', 'services'], ['Staffing', 'staffing'], ['Process', 'process'], ['Clients', 'clients']]

const portalLinks = [
  { label: 'Talent Portal', href: '/portal/#coverage', color: '#6c3fa0' },
  { label: 'Client Portal', href: '/portal/#client', color: '#2d8a4e' },
  { label: 'Reporting Portal', href: '/portal/#reports', color: '#3a7bd5' },
]

export default function Navbar({ home = true }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [portalOpen, setPortalOpen] = useState(false)
  const dropRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const close = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setPortalOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={`container ${s.inner}`}>
        {/* Portal Login / Register dropdown — top left */}
        <div className={s.portalDrop} ref={dropRef}>
          <button
            className={s.portalBtn}
            onClick={() => setPortalOpen(!portalOpen)}
            aria-expanded={portalOpen}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
            Login / Register
            <svg className={`${s.chevron} ${portalOpen ? s.up : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          {portalOpen && (
            <div className={s.portalMenu}>
              {portalLinks.map((p) => (
                <a key={p.href} href={p.href} className={s.portalLink} onClick={() => setPortalOpen(false)}>
                  <span className={s.portalDot} style={{ background: p.color }} />
                  {p.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href={home ? '#top' : '/'} className={s.logo} aria-label="Stress Free Staffing — home">
          <img src="/brand/logo-wordmark.webp" alt="Stress Free Staffing Nationwide" width="560" height="189" />
        </a>
        <nav aria-label="Primary">
          <ul id="nav-menu" className={`${s.links} ${open ? s.open : ''}`}>
            {links.map(([label, id]) => (
              <li key={id}><a href={home ? `#${id}` : `/#${id}`} onClick={() => setOpen(false)}>{label}</a></li>
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
