import Breadcrumbs from '../components/Breadcrumbs'
import WorkCards from '../components/WorkCards'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import { services } from '../data/services'
import { allWork } from '../site'
import s from './Page.module.css'

export default function ServicePage({ service: sv }) {
  const work = sv.work.map((id) => allWork.find((w) => w.id === id)).filter(Boolean)
  const hero = allWork.flatMap((w) => w.images).find((i) => i.src.endsWith(`/${sv.hero}.webp`))
  const others = services.filter((x) => x.slug !== sv.slug)
  return (
    <>
      <section className={s.hero}>
        <div className={`container ${s.heroGrid}`}>
          <div>
            <Breadcrumbs items={[['Home', '/'], ['Services', '/#services'], [sv.name]]} />
            <span className="eyebrow">{sv.name}</span>
            <h1 className={s.h1}>{sv.h1}</h1>
            <p className={s.lede}>{sv.lede}</p>
            <div className={s.btns}>
              <a href="#contact" className="btn btnPrimary">Request a Quote</a>
              <a href="tel:+16196637262" className="btn btnGhost">Call (619) 663-7262</a>
            </div>
          </div>
          {hero && <img className={s.heroImg} src={hero.src} width={hero.w} height={hero.h} alt={hero.alt} fetchPriority="high" />}
        </div>
      </section>

      <section className="section">
        <div className={`container ${s.split}`}>
          <div className={s.prose}>
            <h2 className="h2">How we deliver <em>{sv.name.toLowerCase()}</em></h2>
            {sv.intro.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
          <aside className={s.roles}>
            <h3>Roles we staff for this</h3>
            <ul>{sv.roles.map((r) => <li key={r}>{r}</li>)}</ul>
            <p className={s.note}>All 50 states · 20,000+ vetted professionals</p>
          </aside>
        </div>
      </section>

      <section className={`section ${s.tint}`}>
        <div className="container">
          <div className="sectionHead">
            <span className="eyebrow">What's included</span>
            <h2 className="h2">Everything handled, <em>one point of contact.</em></h2>
          </div>
          <div className={s.includes}>
            {sv.includes.map(([t, d]) => (<div key={t} className={s.inc}><h3>{t}</h3><p>{d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <span className="eyebrow">Related work</span>
            <h2 className="h2">Programs we've <em>run like this.</em></h2>
          </div>
          <WorkCards items={work} />
        </div>
      </section>

      <Faq items={sv.faqs} title={`${sv.name}: common questions`} />

      <section className={s.otherBand}>
        <div className="container">
          <h2 className={s.otherTitle}>Other services</h2>
          <ul className={s.others}>
            {others.map((o) => <li key={o.slug}><a href={`/services/${o.slug}`}>{o.name}</a></li>)}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  )
}
