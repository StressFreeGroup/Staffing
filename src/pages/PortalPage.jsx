import Breadcrumbs from '../components/Breadcrumbs'
import Contact from '../components/Contact'
import { portals } from '../data/portals'
import s from './Page.module.css'
import ps from './PortalPage.module.css'

export default function PortalPage({ portal: pt }) {
  const others = portals.filter((x) => x.slug !== pt.slug)

  return (
    <>
      <section className={s.hero}>
        <div className={`container ${ps.heroInner}`}>
          <Breadcrumbs items={[['Home', '/'], ['Portals', '/#portals'], [pt.name]]} />
          <span className="eyebrow" style={{ color: pt.color }}>{pt.name}</span>
          <h1 className={s.h1}>{pt.h1}</h1>
          <p className={s.lede}>{pt.lede}</p>
          <div className={s.btns}>
            <a href={pt.ctaHref} className="btn btnPrimary">{pt.cta}</a>
            <a href="tel:+16196637262" className="btn btnGhost">Call (619) 663-7262</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${ps.introGrid}`}>
          <div className={s.prose}>
            <h2 className="h2">How it works</h2>
            {pt.intro.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
          </div>
          {pt.roles.length > 0 && (
            <aside className={s.roles}>
              <h3>Roles in the portal</h3>
              <ul>{pt.roles.map((r) => <li key={r}>{r}</li>)}</ul>
            </aside>
          )}
        </div>
      </section>

      <section className={`section ${s.tint}`}>
        <div className="container">
          <div className="sectionHead">
            <span className="eyebrow">Features</span>
            <h2 className="h2">Everything the {pt.name.toLowerCase()} <em>gives you.</em></h2>
          </div>
          <div className={ps.features}>
            {pt.features.map(([title, desc], i) => (
              <div key={title} className={ps.feature}>
                <span className={ps.featureNum} style={{ color: pt.color }}>{String(i + 1).padStart(2, '0')}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHead">
            <span className="eyebrow">Why sampling works</span>
            <h2 className="h2">The ROI from sampling <em>is clear.</em></h2>
            <p className="lede">Inviting people to try your product is the most effective way to communicate value. People experience your brand directly, with all five senses.</p>
          </div>
          <div className={ps.stats}>
            <div className={ps.statCard}>
              <span className={ps.statNum}>81%</span>
              <p>purchase after receiving a sample</p>
              <small>Opinion Research Corp 2010</small>
            </div>
            <div className={ps.statCard}>
              <span className={ps.statNum}>70%</span>
              <p>say recommendation is the #1 factor in purchasing</p>
              <small>Ryan Partnership Study 2012</small>
            </div>
            <div className={ps.statCard}>
              <span className={ps.statNum}>60%</span>
              <p>were not aware of the brand prior to sampling</p>
              <small>Brand Share Survey Data 2014</small>
            </div>
          </div>
        </div>
      </section>

      <section className={s.otherBand}>
        <div className="container">
          <h2 className={s.otherTitle}>Other portals</h2>
          <ul className={s.others}>
            {others.map((o) => <li key={o.slug}><a href={`/portals/${o.slug}`}>{o.name}</a></li>)}
            <li><a href="/#services">All Services</a></li>
          </ul>
        </div>
      </section>

      <Contact />
    </>
  )
}
