import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: 'Always a pleasure. Event and promotional needs were always met with polished and professional staff who are willing to go above and beyond. Very prompt in communication and follow ups. I look forward to continuing to work with Mike and ABM in the future.',
    name: 'Erin McClary',
    role: 'Director of Operations, Celsius',
    initials: 'EM',
  },
  {
    quote: "I enjoyed working with Mike when he managed field marketing initiatives for the East at AQUAhydrate. Executed premium sampling engagements to top tier influencer events at all levels. I'm happy to make my recommendation!",
    name: 'Raz Inserra',
    role: 'Director of Brand Innovation, AQUAhydrate',
    initials: 'RI',
  },
  {
    quote: 'Several high-profile successful campaigns in a range of roles with the ability to get things done. Intuitive and takes initiative in making certain everything is taken care of. Would highly recommend to any company.',
    name: 'Gerrard Jannsee',
    role: "Director of National Sales, Jerry's Vodka",
    initials: 'GJ',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.inner}>
        <div className="reveal">
          <div className={styles.label}>Client Testimonials</div>
          <h2 className={styles.title}>Trusted by Industry Leaders</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={`${styles.card} reveal`}>
              <div className={styles.quote}>&ldquo;</div>
              <p>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <h5>{t.name}</h5>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
