import styles from './Expertise.module.css'

const steps = [
  { num: '01', title: 'Strategy & Planning', desc: 'Campaign conceptualization, activation design, presentations, run of show development, vendor coordination, and procurement planning.' },
  { num: '02', title: 'Staffing & Training', desc: 'Talent sourcing from our 20K+ database, vetting, brand-specific training programs, education materials, and team briefings.' },
  { num: '03', title: 'Production & Logistics', desc: 'Display booth development, footprint design, transport coordination, inventory management, supply sourcing, and permit handling.' },
  { num: '04', title: 'On-Site Execution', desc: 'Build-out and set-up, activation management, sampling operations, real-time team coordination, and quality assurance.' },
  { num: '05', title: 'Strike & Transport', desc: 'Efficient teardown, equipment handling, asset management, and logistics coordination for seamless event wrap-up.' },
  { num: '06', title: 'Reporting & Reconciliation', desc: 'Comprehensive post-event reporting, data analysis, impression tracking, inventory reconciliation, and ROI documentation.' },
]

export default function Expertise() {
  return (
    <section className={styles.expertise} id="expertise">
      <div className="reveal">
        <div className={styles.label}>Our Process</div>
        <h2 className={styles.title}>From Concept to Completion</h2>
        <p className={styles.desc}>Every campaign follows our proven methodology — refined over 25 years and hundreds of activations.</p>
      </div>
      <div className={styles.grid}>
        {steps.map((s) => (
          <div key={s.num} className={`${styles.item} reveal`}>
            <div className={styles.num}>{s.num}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
