import s from './Hero.module.css'

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={`container ${s.grid}`}>
        <div className={s.left}>
          <span className={s.badge}>25+ Years of Marketing Excellence</span>
          <h1>Experiential <span className={s.purple}>Marketing</span> & Staffing Agency</h1>
          <p>A division of <a href="https://www.StressFreeGroup.com" target="_blank" rel="noreferrer">Stress Free Group LLC</a> — full-service staffing, brand activations, sampling campaigns, and event production.</p>
          <div className={s.btns}>
            <a href="#contact" className={s.primary}>Request a Quote</a>
            <a href="#services" className={s.outline}>View Services →</a>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.statGrid}>
            <div className={s.statCard}><h3>20K+</h3><span>Staff Database</span></div>
            <div className={s.statCard}><h3>75+</h3><span>Brands Served</span></div>
            <div className={s.statCard}><h3>25+</h3><span>Years Experience</span></div>
            <div className={s.statCard}><h3>50</h3><span>States Covered</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
