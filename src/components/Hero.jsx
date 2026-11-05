import s from './Hero.module.css'

const stats = [
  ['20,000+', 'Vetted staff nationwide'],
  ['75+', 'Brands served'],
  ['25+', 'Years in the field'],
  ['50', 'States covered'],
]

export default function Hero() {
  return (
    <section className={s.hero} id="top">
      <div className={`container ${s.grid}`}>
        <div className={s.copy}>
          <span className="eyebrow">Event Staffing · Experiential · Sampling</span>
          <h1>Brand teams that <span>show up</span> and deliver — in every market.</h1>
          <p>
            Stress Free Staffing &amp; Events builds, trains and runs on-site teams for brand activations,
            trade shows, festivals, sampling programs and mobile tours across all 50 states. Backed by 25+ years
            running campaigns for brands like Celsius, H&amp;M, MTV, Dunkin' and Boost Mobile.
          </p>
          <div className={s.btns}>
            <a href="#contact" className="btn btnPrimary">Request a Quote</a>
            <a href="#work" className="btn btnGhost">See Our Work</a>
          </div>
        </div>
        <div className={s.mosaic} aria-hidden="false">
          <figure className={s.big}>
            <img src="/work/celsius-team.webp" width="1800" height="1200" alt="Celsius brand ambassador team at the Arnold Sports Festival" fetchPriority="high" />
            <figcaption>Celsius · Arnold Sports Festival</figcaption>
          </figure>
          <figure className={s.small}>
            <img src="/work/hm-dome-night.webp" width="1800" height="1350" alt="H&M festival dome at All Points West" />
            <figcaption>H&amp;M · All Points West</figcaption>
          </figure>
          <figure className={s.small}>
            <img src="/work/mtvu-crowd.webp" width="1600" height="1200" alt="Festival crowd at mtvU Sunblock" />
            <figcaption>mtvU · Sunblock Festival</figcaption>
          </figure>
        </div>
      </div>
      <div className="container">
        <dl className={s.stats}>
          {stats.map(([n, l]) => (
            <div key={l} className={s.stat}><dt>{n}</dt><dd>{l}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  )
}
