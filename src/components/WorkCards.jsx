import Icon from './Icon'
import s from './WorkCards.module.css'

export default function WorkCards({ items }) {
  return (
    <div className={s.grid}>
      {items.map((c) => (
        <a key={c.id} className={s.card} href={`/work/${c.id}`}>
          <div className={s.media}><img src={c.images[0].src} width={c.images[0].w} height={c.images[0].h} alt={c.images[0].alt} loading="lazy" /></div>
          <div className={s.body}>
            <span className={s.meta}>{c.type} · {c.where}</span>
            <h3>{c.brand}</h3>
            <p>{c.title}</p>
            <span className={s.more}>View campaign <Icon name="arrow" size={16} /></span>
          </div>
        </a>
      ))}
    </div>
  )
}
