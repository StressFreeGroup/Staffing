import { brandGroups, agencies } from '../data/work'
import s from './Brands.module.css'

export default function Brands() {
  return (
    <section className="section" id="clients">
      <div className="container">
        <div className="sectionHead reveal">
          <span className="eyebrow">Clients</span>
          <h2 className="h2">Brands we've <em>worked with.</em></h2>
          <p className="lede">Campaigns our team has staffed, managed or produced — directly and through agency partners.</p>
        </div>
        <div className={s.groups}>
          {brandGroups.map((g) => (
            <div key={g.group} className={`${s.group} reveal`}>
              <h3>{g.group}</h3>
              <ul>{g.names.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className={`${s.agencies} reveal`}>
          <h3>Agency partners</h3>
          <p>{agencies.join('  ·  ')}</p>
        </div>
      </div>
    </section>
  )
}
