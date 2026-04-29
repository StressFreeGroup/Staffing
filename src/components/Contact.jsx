import { useState } from 'react'
import s from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => { setSent(false); e.target.reset() }, 3000) }

  return (
    <section className={s.section} id="contact">
      <div className="container">
        <div className={s.grid}>
          <div className="reveal">
            <span className={s.label}>Contact</span>
            <h2>Let's Build Your Next <span>Campaign</span></h2>
            <p className={s.desc}>Ready to activate? Contact us for a custom proposal tailored to your brand's needs, market, and budget.</p>
            <div className={s.methods}>
              <a href="tel:6196637262" className={s.method}><span className={s.methodIcon}>📞</span>(619) 663-7262</a>
              <a href="mailto:Mike@StressFreeGroup.com" className={s.method}><span className={s.methodIcon}>✉️</span>Mike@StressFreeGroup.com</a>
            </div>
          </div>
          <form className={`${s.form} reveal`} onSubmit={submit}>
            <div className={s.row}>
              <div className={s.field}><label>Name</label><input type="text" placeholder="Full name" required /></div>
              <div className={s.field}><label>Company</label><input type="text" placeholder="Company name" /></div>
            </div>
            <div className={s.row}>
              <div className={s.field}><label>Email</label><input type="email" placeholder="you@company.com" required /></div>
              <div className={s.field}><label>Phone</label><input type="tel" placeholder="(555) 000-0000" /></div>
            </div>
            <div className={s.field}><label>Service</label>
              <select defaultValue=""><option value="" disabled>Select a service...</option><option>Event Staffing</option><option>Sampling Campaign</option><option>Brand Activation</option><option>Event Production</option><option>Campaign Management</option><option>Experiential Marketing</option><option>Other</option></select>
            </div>
            <div className={s.field}><label>Details</label><textarea placeholder="Tell us about your campaign or event..." /></div>
            <button type="submit" className={`${s.btn} ${sent ? s.sent : ''}`}>{sent ? 'Sent ✓' : 'Send Request →'}</button>
          </form>
        </div>
      </div>
    </section>
  )
}
