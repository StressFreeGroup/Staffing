import s from './ClientStrip.module.css'

const names = ['MTV', 'Celsius', "McDonald's", 'H&M', 'PepsiCo', 'MasterCard', "Dunkin'", 'Boost Mobile', 'Coors Light', 'AQUAhydrate', 'Rémy Martin', 'HP', 'Bandai Namco', 'The Cheesecake Factory', 'SoBe', 'Food Network']

export default function ClientStrip() {
  const row = [...names, ...names]
  return (
    <section className={s.strip} aria-label="Selected brands we have worked with">
      <p className={s.label}>Selected brands we've staffed and activated</p>
      <div className={s.viewport}>
        <ul className={s.track}>
          {row.map((n, i) => <li key={i} aria-hidden={i >= names.length}>{n}</li>)}
        </ul>
      </div>
    </section>
  )
}
