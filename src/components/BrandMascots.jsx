import s from './BrandMascots.module.css'

export default function BrandMascots() {
  return (
    <section className={`section ${s.section}`}>
      <div className={`container ${s.inner}`}>
        <div className={s.characters}>
          <img src="/brand/characters/sf-staffing-logo-duo.png" width="1200" height="700" alt="Stress Free Staffing — Be Stress Free" loading="lazy" />
        </div>
        <div className={s.text}>
          <h2 className="h2">Be Stress Free.<br /><em>Not stressed out.</em></h2>
          <p className="lede">We handle the staffing so you can focus on the brand. From sourcing and vetting to training and field management, every detail is covered before your team ever clocks in.</p>
          <a href="/portal/#coverage" className="btn btnPrimary">Explore the Talent Portal</a>
        </div>
      </div>
    </section>
  )
}
