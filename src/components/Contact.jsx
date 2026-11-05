import { useState } from 'react'
import Icon from './Icon'
import s from './Contact.module.css'

const EMAIL = 'Mike@StressFreeGroup.com'
const services = ['Event Staffing', 'Sampling Program', 'Brand Activation', 'Trade Show / Convention', 'Mobile or Guerrilla Tour', 'Campaign Management', 'Other']

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    const subject = `Staffing request: ${f.service || 'New inquiry'}${f.company ? ` — ${f.company}` : ''}`
    const body = [
      `Name: ${f.name}`, `Company: ${f.company || '-'}`, `Email: ${f.email}`, `Phone: ${f.phone || '-'}`,
      `Service: ${f.service || '-'}`, `Market(s): ${f.market || '-'}`, `Date(s): ${f.dates || '-'}`, `Staff needed: ${f.headcount || '-'}`,
      '', f.details || '',
    ].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className={`section ${s.section}`} id="contact">
      <div className={`container ${s.grid}`}>
        <div className="reveal">
          <span className="eyebrow">Contact</span>
          <h2 className="h2">Let's staff your <em>next activation.</em></h2>
          <p className="lede">Tell us the market, dates and headcount. We'll come back with a custom proposal — usually within one business day.</p>
          <div className={s.methods}>
            <a href="tel:+16196637262" className={s.method}><span><Icon name="phone" /></span><div><small>Call or text</small>(619) 663-7262</div></a>
            <a href={`mailto:${EMAIL}`} className={s.method}><span><Icon name="mail" /></span><div><small>Email</small>{EMAIL}</div></a>
            <div className={s.method}><span><Icon name="pin" /></span><div><small>Coverage</small>Nationwide · HQ San Diego, CA</div></div>
          </div>
        </div>
        <form className={`${s.form} reveal`} onSubmit={submit}>
          <div className={s.row}>
            <label className={s.field}>Name*<input name="name" type="text" placeholder="Full name" autoComplete="name" required /></label>
            <label className={s.field}>Company<input name="company" type="text" placeholder="Brand or agency" autoComplete="organization" /></label>
          </div>
          <div className={s.row}>
            <label className={s.field}>Email*<input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label>
            <label className={s.field}>Phone<input name="phone" type="tel" placeholder="(555) 000-0000" autoComplete="tel" /></label>
          </div>
          <label className={s.field}>Service
            <select name="service" defaultValue=""><option value="" disabled>Select a service…</option>{services.map((o) => <option key={o}>{o}</option>)}</select>
          </label>
          <div className={s.row3}>
            <label className={s.field}>Market(s)<input name="market" type="text" placeholder="e.g. Austin, TX" /></label>
            <label className={s.field}>Date(s)<input name="dates" type="text" placeholder="e.g. Mar 14–16" /></label>
            <label className={s.field}>Staff needed<input name="headcount" type="text" placeholder="e.g. 6" /></label>
          </div>
          <label className={s.field}>Details<textarea name="details" rows="4" placeholder="Event, goals, roles, hours, attire…" /></label>
          <button type="submit" className="btn btnPrimary">Send Request <Icon name="arrow" size={16} /></button>
          {sent && <p className={s.note} role="status">Your email app should open with your request ready to send. If it doesn't, email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>}
        </form>
      </div>
    </section>
  )
}
