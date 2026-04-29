import s from './Testimonials.module.css'

const data = [
  { q: 'Always a pleasure. Event and promotional needs were always met with polished and professional staff who are willing to go above and beyond. Very prompt in communication and follow ups. I look forward to continuing to work with Mike and ABM in the future.', n: 'Erin McClary', r: 'Director of Operations, Celsius', i: 'EM' },
  { q: "I enjoyed working with Mike when he managed field marketing initiatives for the East at AQUAhydrate. Executed premium sampling engagements to top tier influencer events at all levels. I'm happy to make my recommendation!", n: 'Raz Inserra', r: 'Director of Brand Innovation, AQUAhydrate', i: 'RI' },
  { q: 'Several high-profile successful campaigns in a range of roles with the ability to get things done. Intuitive and takes initiative in making certain everything is taken care of. Would highly recommend to any company.', n: 'Gerrard Jannsee', r: "Director of National Sales, Jerry's Vodka", i: 'GJ' },
]

export default function Testimonials() {
  return (
    <section className={s.section} id="testimonials">
      <div className="container">
        <div className={`${s.top} reveal`}>
          <span className={s.label}>Testimonials</span>
          <h2>Trusted by <span>Industry Leaders</span></h2>
        </div>
        <div className={s.grid}>
          {data.map(t => (
            <div key={t.n} className={`${s.card} reveal`}>
              <div className={s.quote}>&ldquo;</div>
              <p>{t.q}</p>
              <div className={s.author}>
                <div className={s.avatar}>{t.i}</div>
                <div><h5>{t.n}</h5><span>{t.r}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
