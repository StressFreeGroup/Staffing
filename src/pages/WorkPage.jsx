import { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import WorkCards from '../components/WorkCards'
import Lightbox from '../components/Lightbox'
import Contact from '../components/Contact'
import { services } from '../data/services'
import { allWork } from '../site'
import s from './Page.module.css'

export default function WorkPage({ work: w }) {
  const [open, setOpen] = useState(null)
  const related = services.filter((sv) => sv.work.includes(w.id))
  const others = allWork.filter((x) => x.id !== w.id && (x.type === w.type || related.some((r) => r.work.includes(x.id)))).slice(0, 3)
  const [lead, ...rest] = w.images
  return (
    <>
      <section className={s.hero}>
        <div className={`container ${s.heroGrid}`}>
          <div>
            <Breadcrumbs items={[['Home', '/'], ['Past Work', '/#work'], [w.brand]]} />
            <span className="eyebrow">{w.type} · {w.where}</span>
            <h1 className={s.h1}>{w.brand}: {w.title}</h1>
            <p className={s.lede}>{w.summary}</p>
            <dl className={s.facts}>
              <div><dt>Brand</dt><dd>{w.brand}</dd></div>
              <div><dt>Program</dt><dd>{w.type}</dd></div>
              <div><dt>Location</dt><dd>{w.where}</dd></div>
              {w.agency && <div><dt>Agency partner</dt><dd>{w.agency}</dd></div>}
            </dl>
          </div>
          <button className={s.heroBtn} onClick={() => setOpen(0)} aria-label={`Open photo gallery: ${lead.alt}`}>
            <img className={s.heroImg} src={lead.src} width={lead.w} height={lead.h} alt={lead.alt} fetchPriority="high" />
          </button>
        </div>
      </section>

      <section className="section">
        <div className={`container ${s.split}`}>
          <div className={s.prose}>
            <h2 className="h2">What we <em>delivered</em></h2>
            <ul className={s.points}>{w.points.map((p) => <li key={p}>{p}</li>)}</ul>
            {related.length > 0 && (
              <p>Services used: {related.map((r, i) => (<span key={r.slug}>{i > 0 && ', '}<a href={`/services/${r.slug}`}>{r.name}</a></span>))}.</p>
            )}
          </div>
          <aside className={s.roles}>
            <h3>Planning something similar?</h3>
            <p className={s.note}>Tell us your market, dates and headcount and we'll send a custom proposal.</p>
            <a href="#contact" className="btn btnPrimary">Request a Quote</a>
          </aside>
        </div>
      </section>

      {rest.length > 0 && (
        <section className={`section ${s.tint}`}>
          <div className="container">
            <h2 className={s.otherTitle}>Photos from the program</h2>
            <div className={s.gallery} style={{ '--cols': w.images.length % 3 === 0 ? 3 : w.images.length === 4 ? 4 : w.images.length === 2 ? 2 : 3 }}>
              {w.images.map((img, i) => (
                <button key={img.src} onClick={() => setOpen(i)} aria-label={`Open photo: ${img.alt}`}>
                  <img src={img.src} width={img.w} height={img.h} alt={img.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className={s.otherTitle}>More campaigns</h2>
            <WorkCards items={others} />
          </div>
        </section>
      )}

      <Contact />
      {open !== null && <Lightbox item={w} start={open} onClose={() => setOpen(null)} />}
    </>
  )
}
