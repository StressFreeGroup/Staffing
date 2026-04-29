import s from './About.module.css'

const brands = ['MTV',"McDonald's",'MasterCard','PepsiCo','Celsius','AQUAhydrate','Coors Light','Twitter','Geico','SoBe','No Fear',"Jerry's Vodka"]

export default function About() {
  return (
    <section className={s.section} id="about">
      <div className="container">
        <div className={`${s.top} reveal`}>
          <span className={s.label}>About</span>
          <h2>The Stress Free <span>Difference</span></h2>
          <p className={s.intro}>Stress Free Staffing & Events operates under the <a href="https://www.StressFreeGroup.com" target="_blank" rel="noreferrer">Stress Free Group LLC</a> umbrella — expanding our proven services into experiential marketing, staffing, and event production. Led by Michael Katz with 25+ years of hands-on experience.</p>
        </div>
        <div className={s.grid}>
          <div className={`${s.card} reveal`}>
            <div className={s.cardIcon}>⚡</div>
            <h4>Dedicated Contacts</h4>
            <p>Primary and secondary POCs for every campaign. Streamlined communication, no confusion.</p>
          </div>
          <div className={`${s.card} reveal`}>
            <div className={s.cardIcon}>📊</div>
            <h4>Proven Results</h4>
            <p>Data-driven approach with comprehensive reporting and reconciliation on every activation.</p>
          </div>
          <div className={`${s.card} reveal`}>
            <div className={s.cardIcon}>💰</div>
            <h4>Competitive Pricing</h4>
            <p>Lean core staff and low overhead means better rates without sacrificing quality.</p>
          </div>
          <div className={`${s.card} reveal`}>
            <div className={s.cardIcon}>🛠</div>
            <h4>Full Compliance</h4>
            <p>Unions, permits, licenses, certificates, insurance — we know the requirements inside and out.</p>
          </div>
        </div>
        <div className={`${s.brands} reveal`}>
          <h5>Trusted by Leading Brands</h5>
          <div className={s.tags}>{brands.map(b => <span key={b} className={s.tag}>{b}</span>)}</div>
        </div>
      </div>
    </section>
  )
}
