import { useState } from 'react'
import s from './Portals.module.css'

const portals = [
  {
    id: 'talent',
    tab: 'Talent Portal',
    title: 'For Staff & Talent',
    desc: 'A dedicated portal where our 20,000+ professionals manage their profiles, availability, certifications, and assignments.',
    features: [
      'Create and manage talent profile with photo, skills, experience and certifications',
      'Set availability by date, market, and event type',
      'View and accept shift assignments with event details, location, and pay',
      'Upload required documents (W-9, ID, certificates, headshots)',
      'Access brand training materials and talking points before each activation',
      'GPS clock-in/out and photo check-ins during shifts',
      'View earnings history, upcoming assignments, and performance ratings',
    ],
    color: 'var(--purple, #6c3fa0)',
    mockup: 'talent',
  },
  {
    id: 'client',
    tab: 'Client Portal',
    title: 'For Brands & Agencies',
    desc: 'Your campaign command center. Submit requests, review staff, approve teams, and track every activation in real time.',
    features: [
      'Submit staffing requests with market, dates, headcount, and role requirements',
      'Review and approve recommended talent with profiles, photos, and ratings',
      'Track campaign status from booking through execution and reporting',
      'Access real-time shift updates, GPS check-ins, and photo feeds',
      'Download post-event recaps, data captures, and reconciliation reports',
      'Manage multiple campaigns and markets from a single dashboard',
      'View invoices, payments, and budget tracking per activation',
    ],
    color: '#2d8a4e',
    mockup: 'client',
  },
  {
    id: 'reporting',
    tab: 'Reporting Portal',
    title: 'Campaign Analytics & Recaps',
    desc: 'Quantitative and qualitative reporting that drives smarter campaigns. Real numbers, real photos, real feedback from the field.',
    features: [
      'Impressions, interactions, and sampling volume per shift and per market',
      'GPS-verified attendance with clock-in/out timestamps and location data',
      'Photo documentation from every activation with consumer engagement shots',
      'Consumer feedback, survey responses, and qualitative field notes',
      'Inventory tracking: units sampled, distributed, and remaining stock',
      'Exportable recap reports by campaign, market, date range, or staff member',
      'ROI dashboards with cost-per-impression and cost-per-interaction metrics',
    ],
    color: '#3a7bd5',
    mockup: 'reporting',
  },
]

function MockupTalent() {
  return (
    <div className={s.mock}>
      <div className={s.mockHeader}><span className={s.mockDot} /><span className={s.mockDot} /><span className={s.mockDot} /></div>
      <div className={s.mockBody}>
        <div className={s.mockSidebar}>
          <div className={s.mockAvatar} />
          <div className={s.mockLine} style={{width:'80%'}} />
          <div className={s.mockLine} style={{width:'60%',opacity:0.5}} />
          <div className={s.mockDivider} />
          {['Dashboard','My Shifts','Availability','Documents','Training','Earnings'].map((l) => (
            <div key={l} className={s.mockNav}>{l}</div>
          ))}
        </div>
        <div className={s.mockMain}>
          <div className={s.mockTitle}>Upcoming Shifts</div>
          {[
            {brand:'Celsius',event:'Arnold Sports Festival',date:'Mar 14-16',loc:'Columbus, OH',status:'Confirmed'},
            {brand:'Boost Mobile',event:'Taco Truck Tour',date:'Mar 22',loc:'Los Angeles, CA',status:'Pending'},
            {brand:'PepsiCo',event:'Street Sampling',date:'Apr 1-3',loc:'New York, NY',status:'Open'},
          ].map((shift) => (
            <div key={shift.brand} className={s.mockCard}>
              <div className={s.mockCardTop}>
                <strong>{shift.brand}</strong>
                <span className={`${s.mockBadge} ${shift.status === 'Confirmed' ? s.green : shift.status === 'Pending' ? s.amber : s.blue}`}>{shift.status}</span>
              </div>
              <div className={s.mockCardBody}>{shift.event} &middot; {shift.date} &middot; {shift.loc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MockupClient() {
  return (
    <div className={s.mock}>
      <div className={s.mockHeader}><span className={s.mockDot} /><span className={s.mockDot} /><span className={s.mockDot} /></div>
      <div className={s.mockBody}>
        <div className={s.mockSidebar}>
          <div className={s.mockLine} style={{width:'70%',height:8,marginBottom:16}} />
          {['Campaigns','Staff Review','Schedule','Reports','Invoices','Settings'].map((l) => (
            <div key={l} className={s.mockNav}>{l}</div>
          ))}
        </div>
        <div className={s.mockMain}>
          <div className={s.mockTitle}>Active Campaigns</div>
          <div className={s.mockStats}>
            <div className={s.mockStatBox}><span className={s.mockStatNum}>3</span><span>Active</span></div>
            <div className={s.mockStatBox}><span className={s.mockStatNum}>24</span><span>Staff assigned</span></div>
            <div className={s.mockStatBox}><span className={s.mockStatNum}>8</span><span>Markets</span></div>
            <div className={s.mockStatBox}><span className={s.mockStatNum}>96%</span><span>On-time rate</span></div>
          </div>
          {[
            {name:'Celsius Spring Tour',markets:'5 markets',staff:'12 staff',status:'Live'},
            {name:'Trade Show Booth',markets:'Columbus, OH',staff:'6 staff',status:'Upcoming'},
          ].map((c) => (
            <div key={c.name} className={s.mockCard}>
              <div className={s.mockCardTop}>
                <strong>{c.name}</strong>
                <span className={`${s.mockBadge} ${c.status === 'Live' ? s.green : s.blue}`}>{c.status}</span>
              </div>
              <div className={s.mockCardBody}>{c.markets} &middot; {c.staff}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MockupReporting() {
  return (
    <div className={s.mock}>
      <div className={s.mockHeader}><span className={s.mockDot} /><span className={s.mockDot} /><span className={s.mockDot} /></div>
      <div className={s.mockBody}>
        <div className={s.mockSidebar}>
          <div className={s.mockLine} style={{width:'70%',height:8,marginBottom:16}} />
          {['Overview','By Campaign','By Market','By Staff','Data Export','Photos'].map((l) => (
            <div key={l} className={s.mockNav}>{l}</div>
          ))}
        </div>
        <div className={s.mockMain}>
          <div className={s.mockTitle}>Campaign Recap</div>
          <div className={s.mockStats}>
            <div className={s.mockStatBox}><span className={s.mockStatNum}>42K</span><span>Impressions</span></div>
            <div className={s.mockStatBox}><span className={s.mockStatNum}>8,400</span><span>Samples</span></div>
            <div className={s.mockStatBox}><span className={s.mockStatNum}>3,200</span><span>Interactions</span></div>
            <div className={s.mockStatBox}><span className={s.mockStatNum}>$0.18</span><span>Cost/impression</span></div>
          </div>
          <div className={s.mockChart}>
            <div className={s.mockBar} style={{height:'85%'}} /><div className={s.mockBar} style={{height:'62%'}} /><div className={s.mockBar} style={{height:'90%'}} /><div className={s.mockBar} style={{height:'75%'}} /><div className={s.mockBar} style={{height:'95%'}} /><div className={s.mockBar} style={{height:'68%'}} />
          </div>
          <div className={s.mockChartLabel}>Impressions by market</div>
        </div>
      </div>
    </div>
  )
}

const mockups = { talent: MockupTalent, client: MockupClient, reporting: MockupReporting }

export default function Portals() {
  const [active, setActive] = useState('talent')
  const portal = portals.find((p) => p.id === active)
  const Mockup = mockups[active]

  return (
    <section className={`section ${s.section}`} id="portals">
      <div className="container">
        <div className="sectionHead reveal">
          <span className="eyebrow">Technology</span>
          <h2 className="h2">Purpose-built portals for <em>every stakeholder.</em></h2>
          <p className="lede">Staff, clients, and campaign managers each get their own dedicated portal with the tools and visibility they need.</p>
        </div>

        <div className={`${s.tabs} reveal`}>
          {portals.map((p) => (
            <button
              key={p.id}
              className={`${s.tab} ${active === p.id ? s.active : ''}`}
              onClick={() => setActive(p.id)}
              style={active === p.id ? { '--tab-color': p.color } : {}}
            >
              {p.tab}
            </button>
          ))}
        </div>

        <div className={`${s.content} reveal`}>
          <div className={s.info}>
            <h3 style={{ color: portal.color }}>{portal.title}</h3>
            <p className={s.desc}>{portal.desc}</p>
            <ul className={s.features}>
              {portal.features.map((f) => (
                <li key={f}><span className={s.check} style={{ color: portal.color }}>&#10003;</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className={s.preview}>
            <Mockup />
          </div>
        </div>
      </div>
    </section>
  )
}
