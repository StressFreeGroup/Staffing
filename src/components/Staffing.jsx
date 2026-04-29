import styles from './Staffing.module.css'

const roles = [
  'Promotional Models', 'Brand Ambassadors', 'Team Leads', 'Market Managers',
  'General Labor', 'Drivers', 'Account Coordinators', 'Production Staff',
  'Demonstrators', 'Educators', 'Event Managers', 'Setup & Strike Crew',
]

const capabilities = [
  'Sampling', 'Tastings', 'Demonstrations', 'Data Capture', 'Inventory Mgmt',
  'Supply Replenishment', 'Brand Advocacy', 'Consumer Education', 'Product Giveaways',
  'Impressions', 'Interactions', 'Brand Awareness', 'Brand Loyalty',
]

export default function Staffing() {
  return (
    <section className={styles.staffing} id="staffing">
      <div className={styles.content}>
        <div className={styles.flex}>
          <div className={`${styles.left} reveal`}>
            <div className={styles.label}>Our Team Network</div>
            <h2 className={styles.title}>Staff Roles<br />& Capabilities</h2>
            <p className={styles.desc}>
              Access our database of 20,000+ experienced event professionals. Every team member is vetted, trained, and matched to your brand's specific needs.
            </p>
            <div className={styles.caps}>
              {capabilities.map((c) => (
                <span key={c} className={styles.capTag}>{c}</span>
              ))}
            </div>
          </div>
          <div className={`${styles.right} reveal`}>
            <div className={styles.roles}>
              {roles.map((r) => (
                <div key={r} className={styles.roleItem}>
                  <div className={styles.roleDot} />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
