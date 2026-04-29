import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        <div className={styles.logoIcon}>SF</div>
        <div className={styles.logoText}>
          Stress Free
          <span>Staffing & Events</span>
        </div>
      </a>
      <ul className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#staffing" onClick={closeMenu}>Staffing</a></li>
        <li><a href="#expertise" onClick={closeMenu}>Expertise</a></li>
        <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
        <li><a href="#contact" className={styles.cta} onClick={closeMenu}>Get Started</a></li>
      </ul>
      <button className={styles.toggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
