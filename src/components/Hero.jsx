import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg} />
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.badge}>25+ Years of Marketing Excellence</div>
          <h1 className={styles.title}>
            Experiential<br />
            <span className={styles.accent}>Marketing</span> &<br />
            <span className={styles.light}>Staffing</span> Agency
          </h1>
          <p className={styles.sub}>
            A division of{' '}
            <a href="https://www.StressFreeGroup.com" target="_blank" rel="noreferrer" className={styles.link}>
              Stress Free Group LLC
            </a>{' '}
            — providing full-service staffing, brand activations, sampling campaigns, and event production. From concept to execution, we deliver results that build brands.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Request a Quote
            </a>
            <a href="#services" className={styles.btnOutline}>View Services →</a>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.sideCard}>
            <h4>Nationwide Coverage</h4>
            <p>Activate in any market across the country with our extensive network of vetted, trained brand ambassadors and event professionals.</p>
          </div>
          <div className={styles.sideCard}>
            <h4>End-to-End Execution</h4>
            <p>From campaign strategy and staffing to logistics, production, build-out, and post-event reporting — we handle it all.</p>
          </div>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}><h3>20,000+</h3><p>Staff Database</p></div>
        <div className={styles.stat}><h3>75+</h3><p>Brands Served</p></div>
        <div className={styles.stat}><h3>25+</h3><p>Years Experience</p></div>
        <div className={styles.stat}><h3>50</h3><p>States Covered</p></div>
      </div>
    </section>
  )
}
