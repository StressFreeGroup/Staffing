import { services } from '../data/services'
import s from './Page.module.css'

export default function NotFound() {
  return (
    <section className={s.hero}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className={s.h1}>We couldn't find that page.</h1>
        <p className={s.lede}>It may have moved. Try one of these instead:</p>
        <ul className={s.others}>
          <li><a href="/">Home</a></li>
          <li><a href="/#work">Past Work</a></li>
          {services.map((o) => <li key={o.slug}><a href={`/services/${o.slug}`}>{o.name}</a></li>)}
          <li><a href="/#contact">Request a Quote</a></li>
        </ul>
      </div>
    </section>
  )
}
