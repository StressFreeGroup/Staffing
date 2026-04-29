import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={`${styles.inner} reveal`}>
        <div className={styles.label}>Get in Touch</div>
        <h2 className={styles.title}>Let's Build Your<br />Next Campaign</h2>
        <p className={styles.desc}>
          Ready to activate? Contact us for a custom proposal tailored to your brand's needs, market, and budget.
        </p>
        <div className={styles.methods}>
          <a href="tel:6196637262" className={styles.method}>
            <div className={styles.methodIcon}>📞</div>
            <span>(619) 663-7262</span>
          </a>
          <a href="mailto:Mike@StressFreeGroup.com" className={styles.method}>
            <div className={styles.methodIcon}>✉️</div>
            <span>Mike@StressFreeGroup.com</span>
          </a>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.group}>
              <label>Your Name</label>
              <input type="text" placeholder="Full name" required />
            </div>
            <div className={styles.group}>
              <label>Company</label>
              <input type="text" placeholder="Company name" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.group}>
              <label>Email</label>
              <input type="email" placeholder="you@company.com" required />
            </div>
            <div className={styles.group}>
              <label>Phone</label>
              <input type="tel" placeholder="(555) 000-0000" />
            </div>
          </div>
          <div className={styles.group}>
            <label>Service Needed</label>
            <select defaultValue="">
              <option value="" disabled>Select a service...</option>
              <option>Event Staffing</option>
              <option>Sampling Campaign</option>
              <option>Brand Activation</option>
              <option>Event Production</option>
              <option>Campaign Management</option>
              <option>Experiential Marketing</option>
              <option>Other</option>
            </select>
          </div>
          <div className={styles.group}>
            <label>Project Details</label>
            <textarea placeholder="Tell us about your campaign, event, or staffing needs..." />
          </div>
          <button type="submit" className={`${styles.submit} ${sent ? styles.submitted : ''}`}>
            {sent ? 'Sent ✓' : 'Send Request →'}
          </button>
        </form>
      </div>
    </section>
  )
}
