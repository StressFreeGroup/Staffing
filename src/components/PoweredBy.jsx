import s from './PoweredBy.module.css'

export default function PoweredBy() {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={`${s.card} reveal`}>
          <div className={s.content}>
            <img
              src="/brand/abm-horizontal.png"
              alt="Alternative Brand Marketing"
              className={s.logo}
              width="400"
              height="100"
              loading="lazy"
            />
            <div className={s.text}>
              <h3>
                <span className={s.powered}>Powered by</span>
                Alternative Brand Marketing
              </h3>
              <p>
                Independently operating since 2010 — your nationwide marketing agency.
                More accessible, more responsive, more streamlined. Competitive pricing,
                faster turnaround, and result-driven execution on every campaign.
              </p>
            </div>
          </div>
          <div className={s.stats}>
            <div className={s.stat}>
              <span className={s.num}>81%</span>
              <span className={s.statLabel}>purchase after receiving a sample</span>
            </div>
            <div className={s.stat}>
              <span className={s.num}>70%</span>
              <span className={s.statLabel}>say recommendation is #1 factor in purchasing</span>
            </div>
            <div className={s.stat}>
              <span className={s.num}>60%</span>
              <span className={s.statLabel}>not aware of brand prior to sampling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
