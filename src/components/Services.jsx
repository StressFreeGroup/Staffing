import s from './Services.module.css'

const data = [
  { icon: '🎯', t: 'Brand Activations', d: 'Immersive brand experiences from concept to execution — planning, production, and activation management.' },
  { icon: '🧪', t: 'Sampling Campaigns', d: 'Nationwide on/off-premise sampling, festivals, concerts, retail. Tastings, demos, education, and data capture.' },
  { icon: '👥', t: 'Event Staffing', d: '20,000+ vetted professionals — brand ambassadors, promo models, team leads, market managers, drivers, and crew.' },
  { icon: '📋', t: 'Campaign Management', d: 'End-to-end program development — training, logistics, vendor coordination, procurement, and budget management.' },
  { icon: '🏗', t: 'Event Production', d: 'On-site build-out, display booth development, strike and transport, footprint design, and sponsorship activations.' },
  { icon: '📢', t: 'Experiential Marketing', d: 'Memorable brand-consumer touchpoints driving impressions, interactions, awareness, loyalty, and advocacy.' },
  { icon: '🎓', t: 'Training & Education', d: 'Staff training, brand education, product knowledge development, presentation prep, and team briefings.' },
  { icon: '📈', t: 'Reporting & Analytics', d: 'Post-event reporting, reconciliation, inventory management, data analysis, and ROI documentation.' },
]

export default function Services() {
  return (
    <section className={s.section} id="services">
      <div className="container">
        <div className={`${s.top} reveal`}>
          <span className={s.label}>Services</span>
          <h2>Full-Service <span>Capabilities</span></h2>
        </div>
        <div className={s.grid}>
          {data.map((d) => (
            <div key={d.t} className={`${s.card} reveal`}>
              <div className={s.icon}>{d.icon}</div>
              <h3>{d.t}</h3>
              <p>{d.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
