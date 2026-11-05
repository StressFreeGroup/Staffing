import s from './Staffing.module.css'

const roles = ['Brand Ambassadors', 'Promotional Models', 'Trade Show Spokesmodels', 'Product Demonstrators', 'Team Leads', 'Event & Market Managers', 'Street & Guerrilla Teams', 'Hosts & Hostesses', 'Emcees, DJs & Talent', 'Bartenders', 'Drivers', 'Set-Up & Strike Crew', 'Account Coordinators', 'Educators & Trainers']

const steps = [
  ['Sourced', 'From a database of 20,000+ vetted professionals in every major U.S. market.'],
  ['Screened', 'Vetted and hand-matched to your brand, audience and campaign requirements.'],
  ['Trained', 'Brand education, product knowledge and talking points before day one.'],
  ['Tracked', 'GPS clock-in/out, photo check-ins and live communication on every shift.'],
]

export default function Staffing() {
  return (
    <section className={`section ${s.section}`} id="staffing">
      <div className={`container ${s.grid}`}>
        <div className="reveal">
          <span className={`eyebrow ${s.eyebrow}`}>Staffing</span>
          <h2 className={`h2 ${s.h2}`}>20,000+ vetted pros. <em>The right ones for your brand.</em></h2>
          <p className={s.desc}>We don't send bodies — we send people who represent your brand like it's their own, backed by a manager who answers the phone.</p>
          <ol className={s.steps}>
            {steps.map(([t, d], i) => (
              <li key={t}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{t}</h3><p>{d}</p></div></li>
            ))}
          </ol>
        </div>
        <div className="reveal">
          <div className={s.photos}>
            <img src="/work/celsius-cheers.webp" width="1400" height="933" alt="Celsius ambassadors toasting at their booth" loading="lazy" />
            <img src="/work/boost-truck-staff.webp" width="1400" height="1050" alt="Boost Mobile brand ambassadors at the taco truck" loading="lazy" />
            <img src="/work/dunkin-team.webp" width="1400" height="1050" alt="Dunkin' marathon team" loading="lazy" />
          </div>
          <h3 className={s.rolesTitle}>Roles we staff</h3>
          <ul className={s.roles}>{roles.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
