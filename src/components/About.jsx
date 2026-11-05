import Icon from './Icon'
import s from './About.module.css'

const points = [
  { icon: 'users', t: 'Dedicated contacts', d: 'A primary and secondary point of contact on every campaign. One line of communication, no inter-office confusion.' },
  { icon: 'chart', t: 'Reporting you can use', d: 'GPS clock-in/out, photo check-ins, live scheduling and post-event recaps with numbers, photos and consumer feedback.' },
  { icon: 'tag', t: 'Competitive pricing', d: 'A lean core team and low overhead mean sharper rates — without cutting corners on talent or training.' },
  { icon: 'shield', t: 'Fully compliant', d: 'Insurance, permits, licenses, certificates and union requirements handled before your team ever clocks in.' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className={`container ${s.grid}`}>
        <div className={`${s.photo} reveal`}>
          <img src="/work/remy-team.webp" width="1400" height="933" alt="Event hosts at a Rémy Martin VIP night" loading="lazy" />
          <img className={s.inset} src="/work/aqua-lineup.webp" width="1400" height="788" alt="AQUAhydrate sampling team" loading="lazy" />
        </div>
        <div className="reveal">
          <span className="eyebrow">Why Stress Free</span>
          <h2 className="h2">Twenty-five years of field experience, <em>none of the stress.</em></h2>
          <p className="lede">
            Stress Free Staffing &amp; Events is the staffing and experiential division of{' '}
            <a className={s.link} href="https://www.stressfreegroup.com" target="_blank" rel="noreferrer">Stress Free Group LLC</a>.
            It's built on the playbook founder Michael Katz developed running Alternative Brand Marketing in New York
            and managing national programs for agencies like Red Peg, Revolution and Massive Media — hundreds of
            activations, from street teams to festival builds.
          </p>
          <div className={s.points}>
            {points.map((p) => (
              <div key={p.t} className={s.point}>
                <span className={s.icon}><Icon name={p.icon} /></span>
                <div><h3>{p.t}</h3><p>{p.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
