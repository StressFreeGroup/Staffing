import styles from './About.module.css'

const features = [
  { icon: '⚡', title: 'Dedicated Contacts', desc: 'Primary and secondary POCs for every campaign. Streamlined communication, no confusion.' },
  { icon: '📊', title: 'Proven Results', desc: 'Data-driven approach with comprehensive reporting and reconciliation on every activation.' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Lean core staff and low overhead means better rates without sacrificing quality.' },
  { icon: '🛠', title: 'Full Compliance', desc: 'Unions, permits, licenses, certificates, insurance — we know the requirements inside and out.' },
]

const brands = ['MTV', "McDonald's", 'MasterCard', 'PepsiCo', 'Celsius', 'AQUAhydrate', 'SoBe', 'No Fear', "Jerry's Vodka"]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.grid}>
        <div className="reveal">
          <div className={styles.label}>Why Stress Free</div>
          <h2 className={styles.title}>Built on 25 Years<br />of Field Experience</h2>
          <p className={styles.desc}>
            Stress Free Staffing & Events operates under the{' '}
            <a href="https://www.StressFreeGroup.com" target="_blank" rel="noreferrer" className={styles.link}>
              Stress Free Group LLC
            </a>{' '}
            umbrella — expanding our proven services into experiential marketing, staffing, and event production. Led by Michael Katz with 25+ years of hands-on experience, from nightlife promotions at age 16 to managing grand-scale nationwide campaigns for the world's biggest brands.
          </p>
          <div className={styles.features}>
            {features.map((f) => (
              <div key={f.title} className={styles.feature}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal">
          <div className={styles.card}>
            <h3>The Stress Free Difference</h3>
            <p>
              As part of the Stress Free Group family of services, Stress Free Staffing brings the same dedication to excellence across every industry we touch. We've synthesized the Strategy for Success — our field-proven playbook built from decades of activations — delivering institutional knowledge, battle-tested processes, and a passion for execution that turns campaigns into measurable wins for your brand.
            </p>
            <div className={styles.brands}>
              <h5>Brands We've Worked With</h5>
              <div className={styles.brandTags}>
                {brands.map((b) => (
                  <span key={b} className={styles.tag}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
