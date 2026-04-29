import styles from './Services.module.css'

const services = [
  { icon: '🎯', title: 'Brand Activations', desc: 'Conceptualization, planning, production, and execution of immersive brand experiences that create lasting impressions and real engagement.' },
  { icon: '🧪', title: 'Sampling Campaigns', desc: 'Nationwide sampling programs — on-premise, off-premise, festivals, concerts, and retail. Tastings, demonstrations, education, and data capture.' },
  { icon: '👥', title: 'Event Staffing', desc: '20,000+ vetted professionals including brand ambassadors, promotional models, team leads, market managers, drivers, and production staff.' },
  { icon: '📋', title: 'Campaign Management', desc: 'End-to-end program development — training, logistics, vendor coordination, run of shows, procurement, sourcing, and budget management.' },
  { icon: '🏗', title: 'Event Production', desc: 'On-site set-up and build-out, display booth development, strike and transport, footprint design, and full sponsorship activation management.' },
  { icon: '📢', title: 'Experiential Marketing', desc: 'Creating memorable touchpoints between brands and consumers. Impressions, interactions, brand awareness, loyalty, and advocacy campaigns.' },
  { icon: '🎓', title: 'Training & Education', desc: 'Comprehensive staff training programs, brand education sessions, product knowledge development, and presentation preparation.' },
  { icon: '📈', title: 'Reporting & Analytics', desc: 'Detailed post-event reporting, reconciliation, inventory management, data capture analysis, and ROI measurement.' },
]

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={`${styles.header} reveal`}>
        <div className={styles.label}>What We Do</div>
        <h2 className={styles.title}>Full-Service Capabilities</h2>
      </div>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.title} className={`${styles.card} reveal`}>
            <div className={styles.icon}>{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
