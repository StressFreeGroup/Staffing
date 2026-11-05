import Icon from './Icon'
import s from './Testimonials.module.css'

const data = [
  { q: 'Always a pleasure. Event and promotional needs were always met with polished and professional staff who are always willing to go above and beyond what they were tasked with. Very prompt in communication and follow-ups. I look forward to continuing to work with Mike in the future.', n: 'Erin McClary', r: 'Director of Operations', c: 'Celsius' },
  { q: "I enjoyed working with Mike when he managed field marketing initiatives for the East at AQUAhydrate. Executed premium sampling engagements to top-tier influencer events at all levels. I'm happy to make my recommendation!", n: 'Raz Inserra', r: 'Director of Brand Innovation', c: 'AQUAhydrate' },
  { q: 'Several high-profile successful campaigns in a range of roles with the ability to get things done. Intuitive and takes initiative in making certain everything is taken care of — without having to be asked. Would highly recommend to any company.', n: 'Gerrard Jannsee', r: 'Director of National Sales', c: "Jerry's Vodka" },
]

export default function Testimonials() {
  return (
    <section className={`section ${s.section}`} id="testimonials">
      <div className="container">
        <div className="sectionHead reveal">
          <span className="eyebrow">Testimonials</span>
          <h2 className="h2">What brand leaders <em>say about us.</em></h2>
        </div>
        <div className={s.grid}>
          {data.map((t) => (
            <figure key={t.n} className={`${s.card} reveal`}>
              <Icon name="quote" size={34} stroke={0} className={s.q} />
              <blockquote>{t.q}</blockquote>
              <figcaption>
                <strong>{t.n}</strong>
                <span>{t.r}, {t.c}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
