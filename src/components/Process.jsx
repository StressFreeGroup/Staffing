import s from './Process.module.css'

const steps = [
  { n: '01', t: 'Strategy & Planning', d: 'Campaign conceptualization, activation design, vendor coordination, run of show, and procurement.' },
  { n: '02', t: 'Staffing & Training', d: 'Talent sourcing from our 20K+ database, vetting, brand-specific training, and team briefings.' },
  { n: '03', t: 'Production & Logistics', d: 'Booth development, footprint design, transport, inventory management, and permit handling.' },
  { n: '04', t: 'On-Site Execution', d: 'Build-out, activation management, sampling operations, team coordination, and QA.' },
  { n: '05', t: 'Strike & Transport', d: 'Teardown, equipment handling, asset management, and logistics for seamless wrap-up.' },
  { n: '06', t: 'Reporting', d: 'Post-event reporting, data analysis, impression tracking, inventory reconciliation, and ROI docs.' },
]

export default function Process() {
  return (
    <section className={s.section} id="process">
      <div className="container">
        <div className={`${s.top} reveal`}>
          <span className={s.label}>Process</span>
          <h2>From Concept to <span>Completion</span></h2>
        </div>
        <div className={s.grid}>
          {steps.map(st => (
            <div key={st.n} className={`${s.step} reveal`}>
              <div className={s.num}>{st.n}</div>
              <h4>{st.t}</h4>
              <p>{st.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
