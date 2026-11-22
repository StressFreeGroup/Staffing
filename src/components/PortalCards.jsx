import s from './PortalCards.module.css'

const portals = [
  {
    slug: 'talent-portal',
    href: '/portal/#coverage',
    title: 'Talent Portal',
    desc: 'Where our 20,000+ professionals manage profiles, availability, certifications, shifts, training, and earnings.',
    highlights: ['Profile & skills management', 'Shift assignments & GPS check-in', 'Training materials & brand education', 'Earnings history & documents'],
    color: 'var(--purple, #6c3fa0)',
  },
  {
    slug: 'client-portal',
    href: '/portal/#client',
    title: 'Client Portal',
    desc: 'Your campaign command center. Submit requests, review staff, approve teams, and track every activation in real time.',
    highlights: ['Submit staffing requests', 'Review & approve talent', 'Real-time shift tracking', 'Invoices & budget tracking'],
    color: '#2d8a4e',
  },
  {
    slug: 'reporting-portal',
    href: '/portal/#reports',
    title: 'Reporting Portal',
    desc: 'Quantitative and qualitative reporting that drives smarter campaigns. Real numbers, real photos, real feedback.',
    highlights: ['Impressions & interaction data', 'GPS-verified attendance', 'Photo documentation', 'ROI dashboards & exports'],
    color: '#3a7bd5',
  },
]

export default function PortalCards() {
  return (
    <section className={`section ${s.section}`} id="portals">
      <div className="container">
        <div className="sectionHead reveal">
          <span className="eyebrow">Technology</span>
          <h2 className="h2">Purpose-built portals for <em>every stakeholder.</em></h2>
          <p className="lede">Staff, clients, and campaign managers each get their own dedicated portal with the tools and visibility they need.</p>
        </div>
        <div className={s.grid}>
          {portals.map((p) => (
            <a key={p.slug} href={p.href} className={`${s.card} reveal`} style={{ '--card-accent': p.color }}>
              <div className={s.cardAccent} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>
                {p.highlights.map((h) => (
                  <li key={h}><span className={s.check}>&#10003;</span>{h}</li>
                ))}
              </ul>
              <span className={s.link}>View full details &#8594;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
