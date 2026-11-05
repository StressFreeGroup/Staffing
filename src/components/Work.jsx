import { useMemo, useState } from 'react'
import { featured, more, gallery } from '../data/work'
import Lightbox from './Lightbox'
import Icon from './Icon'
import s from './Work.module.css'

const CAT = {
  'Trade Show': 'Trade Shows',
  Festival: 'Festivals & Events', Concert: 'Festivals & Events', 'Sports Event': 'Festivals & Events', Nightlife: 'Festivals & Events',
  Sampling: 'Sampling', Campus: 'Sampling',
  'Mobile Tour': 'Tours & Guerrilla', Guerrilla: 'Tours & Guerrilla',
}
const all = [...featured, ...more].map((c) => ({ ...c, cat: CAT[c.type] || 'Other' }))
const types = ['All', 'Trade Shows', 'Festivals & Events', 'Sampling', 'Tours & Guerrilla']
const WIDE = new Set([0, 8])

export default function Work() {
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null) // { item, index }
  const list = useMemo(() => (filter === 'All' ? all : all.filter((c) => c.cat === filter)), [filter])

  const wide = filter === 'All' ? WIDE : new Set(list.length % 3 === 2 ? [0] : list.length % 3 === 1 && list.length > 1 ? [0, 2] : [])

  const galleryItem = { id: 'field', brand: 'From the field', title: 'More activations', images: gallery }

  return (
    <section className={`section ${s.section}`} id="work">
      <div className="container">
        <div className={`sectionHead ${s.head} reveal`}>
          <div>
            <span className="eyebrow">Past Work</span>
            <h2 className="h2">Campaigns we've <em>staffed, built and run.</em></h2>
            <p className="lede">A selection of programs led by our team — directly for brands and alongside leading experiential agencies.</p>
          </div>
          <div className={s.filters} role="tablist" aria-label="Filter campaigns by type">
            {types.map((t) => (
              <button key={t} role="tab" aria-selected={filter === t} className={`${s.chip} ${filter === t ? s.active : ''}`} onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
        </div>

        <div className={s.grid}>
          {list.map((c, i) => (
            <button key={c.id} className={`${s.card} ${wide.has(i) ? s.wide : ''}`} onClick={() => setOpen({ item: c, index: 0 })} aria-label={`View ${c.brand} — ${c.title}`}>
              <div className={s.media}>
                <img src={c.images[0].src} width={c.images[0].w} height={c.images[0].h} alt={c.images[0].alt} loading="lazy" />
                <span className={s.count}>{c.images.length} photos</span>
              </div>
              <div className={s.body}>
                <span className={s.meta}>{c.type} · {c.where}</span>
                <h3>{c.brand}</h3>
                <p>{c.title}</p>
                {wide.has(i) && <p className={s.summary}>{c.summary}</p>}
                {c.agency && <span className={s.agency}>with {c.agency}</span>}
                <span className={s.more}>View campaign <Icon name="arrow" size={16} /></span>
              </div>
            </button>
          ))}
        </div>

        <div className={`${s.field} reveal`}>
          <div className={s.fieldHead}>
            <h3>More from the field</h3>
            <p>Deep Eddy Vodka · Sparkling ICE · Grand Marnier · Coors Light · Jergens · in-store wine demos and more.</p>
          </div>
          <div className={s.strip}>
            {gallery.map((g, i) => (
              <button key={g.src} className={s.thumb} onClick={() => setOpen({ item: galleryItem, index: i })} aria-label={`Open photo: ${g.alt}`}>
                <img src={g.src} width={g.w} height={g.h} alt={g.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
      {open && <Lightbox item={open.item} start={open.index} onClose={() => setOpen(null)} />}
    </section>
  )
}
