import s from './SamplingStats.module.css'

const stats = [
  { num: '81%', label: 'purchase after receiving a sample', source: 'Opinion Research Corp 2010' },
  { num: '70%', label: 'say recommendation is the #1 factor in purchasing', source: 'Ryan Partnership Study 2012' },
  { num: '60%', label: 'were not aware of the brand prior to sampling', source: 'Brand Share Survey Data 2014' },
]

export default function SamplingStats() {
  return (
    <section className={`section ${s.section}`}>
      <div className="container">
        <div className="sectionHead reveal">
          <span className="eyebrow">Why Sampling Works</span>
          <h2 className="h2">The ROI from sampling <em>is clear.</em></h2>
          <p className="lede">Inviting people to try your product is the most effective way to communicate value. People experience your brand directly, with all five senses, generating a halo effect that converts buyers and sparks conversations.</p>
        </div>
        <div className={s.grid}>
          {stats.map((st) => (
            <div key={st.num} className={`${s.card} reveal`}>
              <div className={s.num}>{st.num}</div>
              <p className={s.label}>{st.label}</p>
              <span className={s.source}>{st.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
