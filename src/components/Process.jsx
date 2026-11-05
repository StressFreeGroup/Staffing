import s from './Process.module.css'

const steps = [
  ['Strategy & Planning', 'Goals, markets, footprint, run of show, vendors and budget — scoped in a clear proposal.'],
  ['Staffing & Training', 'Talent selected from our 20K+ network, then trained on your brand and product.'],
  ['Production & Logistics', 'Booths, wraps, inventory, permits, transport and insurance, all coordinated.'],
  ['On-Site Execution', 'Build-out, activation management and a lead on site keeping quality high.'],
  ['Strike & Transport', 'Clean teardown, asset handling and return logistics.'],
  ['Recap & Reconciliation', 'Photos, numbers, consumer feedback and inventory reconciled into one recap.'],
]

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="sectionHead reveal">
          <span className="eyebrow">Process</span>
          <h2 className="h2">From concept <em>to completion.</em></h2>
        </div>
        <ol className={s.grid}>
          {steps.map(([t, d], i) => (
            <li key={t} className={`${s.step} reveal`}>
              <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
