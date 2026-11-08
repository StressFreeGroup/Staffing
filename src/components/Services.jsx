import Icon from './Icon'
import s from './Services.module.css'

const data = [
  { icon: 'users', t: 'Event Staffing', slug: 'event-staffing', d: 'Brand ambassadors, spokesmodels, hosts, team leads, market managers, drivers and set-up/strike crew — booked, briefed and on time.' },
  { icon: 'cup', t: 'Sampling Programs', slug: 'sampling-programs', d: 'Street, retail, on- and off-premise sampling with a purpose: education, trial, cans in hands and data capture.' },
  { icon: 'spark', t: 'Brand Activations', slug: 'brand-activations', d: 'Immersive experiences from concept to strike — footprint design, run of show, vendor coordination and on-site management.' },
  { icon: 'stage', t: 'Trade Shows & Conventions', slug: 'trade-show-staffing', d: 'Booth production plus trade-ready spokesmodels who know your product and capture qualified leads.' },
  { icon: 'pin', t: 'Mobile & Guerrilla Tours', slug: 'mobile-tours', d: 'Wrapped vehicles, food trucks, street teams and multi-city tours with routing, permits and daily reporting.' },
  { icon: 'clipboard', t: 'Campaign Management', d: 'End-to-end program builds: budgets, procurement, logistics, training, scheduling and quality control.' },
  { icon: 'book', t: 'Training & Education', d: 'Brand-specific training decks, product knowledge, talking points and pre-shift briefings for every team.' },
  { icon: 'report', t: 'Reporting & Recaps', d: 'GPS-verified shifts, photo check-ins, inventory reconciliation and post-event recaps with real numbers.' },
]

const venues = ['Festivals & concerts', 'Trade shows & expos', 'Sporting events', 'College campuses', 'Retail & grocery', 'Nightlife & VIP', 'Conventions', 'Street teams', 'Corporate events', 'Product launches']

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="sectionHead reveal">
          <span className="eyebrow">Services</span>
          <h2 className="h2">Full-service, <em>from booking to recap.</em></h2>
          <p className="lede">Hire us for a single shift or hand us the whole program. Either way you get one accountable team.</p>
        </div>
        <div className={s.grid}>
          {data.map((d) => (
            <article key={d.t} className={`${s.card} reveal`}>
              <span className={s.icon}><Icon name={d.icon} size={24} /></span>
              <h3>{d.slug ? <a href={`/services/${d.slug}`}>{d.t}</a> : d.t}</h3>
              <p>{d.d}</p>
              {d.slug && <a className={s.link} href={`/services/${d.slug}`}>Learn more <Icon name="arrow" size={15} /></a>}
            </article>
          ))}
        </div>
        <p className={`${s.amb} reveal`}>Looking for people specifically? See <a href="/services/brand-ambassadors">brand ambassador &amp; promotional model staffing</a>.</p>
        <div className={`${s.venues} reveal`}>
          <span>Where we show up</span>
          <ul>{venues.map((v) => <li key={v}>{v}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
