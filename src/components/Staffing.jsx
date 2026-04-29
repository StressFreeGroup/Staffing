import s from './Staffing.module.css'

const roles = ['Promotional Models','Brand Ambassadors','Team Leads','Market Managers','General Labor','Drivers','Account Coordinators','Production Staff','Demonstrators','Educators','Event Managers','Setup & Strike Crew']
const caps = ['Sampling','Tastings','Demonstrations','Data Capture','Inventory Management','Supply Replenishment','Brand Advocacy','Consumer Education','Product Giveaways','Impressions','Interactions','Brand Awareness','Brand Loyalty']

export default function Staffing() {
  return (
    <section className={s.section} id="staffing">
      <div className="container">
        <div className={s.grid}>
          <div className="reveal">
            <span className={s.label}>Staffing</span>
            <h2>20,000+ Vetted <span>Professionals</span></h2>
            <p className={s.desc}>Every team member is sourced, vetted, trained, and matched to your brand's specific needs and campaign requirements.</p>
            <div className={s.caps}>{caps.map(c => <span key={c} className={s.cap}>{c}</span>)}</div>
          </div>
          <div className={`${s.roles} reveal`}>
            {roles.map(r => (
              <div key={r} className={s.role}>
                <div className={s.dot} />
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
