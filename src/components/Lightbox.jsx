import { useEffect, useRef, useState, useCallback } from 'react'
import Icon from './Icon'
import s from './Lightbox.module.css'

export default function Lightbox({ item, start = 0, onClose }) {
  const [i, setI] = useState(start)
  const n = item.images.length
  const closeRef = useRef(null)
  const go = useCallback((d) => setI((x) => (x + d + n) % n), [n])

  useEffect(() => {
    const prev = document.activeElement
    const key = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', key)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; prev?.focus?.() }
  }, [go, onClose])

  const img = item.images[i]
  return (
    <div className={s.backdrop} role="dialog" aria-modal="true" aria-label={`${item.brand} — ${item.title}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={s.panel}>
        <button ref={closeRef} className={s.close} onClick={onClose} aria-label="Close"><Icon name="close" /></button>
        <div className={s.stage}>
          <img key={img.src} src={img.src} width={img.w} height={img.h} alt={img.alt} />
          {n > 1 && <>
            <button className={`${s.nav} ${s.prev}`} onClick={() => go(-1)} aria-label="Previous photo"><Icon name="left" /></button>
            <button className={`${s.nav} ${s.next}`} onClick={() => go(1)} aria-label="Next photo"><Icon name="right" /></button>
          </>}
          <span className={s.counter}>{i + 1} / {n}</span>
        </div>
        <aside className={s.info}>
          {item.type && <span className={s.meta}>{item.type} · {item.where}</span>}
          <h3>{item.brand}</h3>
          <p className={s.title}>{item.title}</p>
          {item.summary && <p className={s.summary}>{item.summary}</p>}
          {item.points && <ul className={s.points}>{item.points.map((p) => <li key={p}>{p}</li>)}</ul>}
          {item.agency && <p className={s.agency}>Agency partner: {item.agency}</p>}
          <div className={s.thumbs}>
            {item.images.map((t, k) => (
              <button key={t.src} className={k === i ? s.on : ''} onClick={() => setI(k)} aria-label={`Show photo ${k + 1}`}>
                <img src={t.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
          {item.summary && <a href="#contact" onClick={onClose} className="btn btnPrimary">Plan something similar</a>}
        </aside>
      </div>
    </div>
  )
}
