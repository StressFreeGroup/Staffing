import s from './Faq.module.css'

export default function Faq({ items, title = 'Frequently asked questions', eyebrow = 'FAQ', id = 'faq' }) {
  return (
    <section className="section" id={id}>
      <div className={`container ${s.grid}`}>
        <div className="reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h2">{title}</h2>
          <p className="lede">Straight answers to what brands and agencies ask us most. Don't see yours? <a className={s.link} href="#contact">Ask us directly.</a></p>
        </div>
        <div className={`${s.list} reveal`}>
          {items.map(([q, a], i) => (
            <details key={q} className={s.item} open={i === 0}>
              <summary><h3>{q}</h3><span className={s.plus} aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
