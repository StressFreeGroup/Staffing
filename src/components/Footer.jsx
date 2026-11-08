import { services } from '../data/services'
import s from './Footer.module.css'

const family = [
  ['Stress Free Group', 'https://www.stressfreegroup.com'],
  ['Stress Free RVs', 'https://www.stressfreervs.com'],
]

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`container ${s.inner}`}>
        <div className={s.brand}>
          <img src="/brand/logo-wordmark-white.webp" alt="Stress Free Staffing Nationwide" width="560" height="189" loading="lazy" />
          <p>Event staffing, sampling and experiential marketing — nationwide.</p>
        </div>
        <nav className={s.cols} aria-label="Footer">
          <div>
            <h4>Services</h4>
            {services.map((sv) => <a key={sv.slug} href={`/services/${sv.slug}`}>{sv.name}</a>)}
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:+16196637262">(619) 663-7262</a><a href="mailto:Mike@StressFreeGroup.com">Mike@StressFreeGroup.com</a><a href="#contact">Request a Quote</a><a href="/#work">Past Work</a><a href="/#clients">Clients</a><a href="/#faq">FAQ</a>
          </div>
          <div>
            <h4>The Stress Free family</h4>
            {family.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer">{n}</a>)}
          </div>
        </nav>
      </div>
      <div className={`container ${s.bottom}`}>
        <span>&copy; {new Date().getFullYear()} Stress Free Group LLC. All rights reserved.</span>
        <span>Website built by <a className={s.credit} href="https://www.stressfreegroup.com" target="_blank" rel="noreferrer">STRESS FREE GROUP</a> (<a className={s.credit} href="https://www.stressfreegroup.com" target="_blank" rel="noreferrer">www.StressFreeGroup.com</a>)</span>
      </div>
    </footer>
  )
}
