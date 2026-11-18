import s from './PoweredBy.module.css'

export default function PoweredBy() {
  return (
    <a href="https://www.AlternativeBrandMarketing.com" target="_blank" rel="noreferrer" className={s.bar}>
      <div className={s.inner}>
        <img src="/brand/abm-emblem.png" alt="ABM" width="22" height="22" className={s.emblem} />
        <span className={s.text}>
          Powered by <strong>Alternative Brand Marketing</strong>
          <span className={s.divider}>|</span>
          <span className={s.since}>Independently operating since 2010</span>
        </span>
      </div>
    </a>
  )
}
