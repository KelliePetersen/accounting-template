import React from 'react'
import styles from "./services.module.scss"

const Services = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>Our Services.</h2>
      <div className={styles.grid}>
        <div>
          <div className={styles.icon}></div>
          <h4 className={styles.subheading}>Accounting</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque lorem, 
            vulputate vitae ullamcorper vitae, mattis finibus enim. </p>
        </div>
        <div>
          <div className={styles.icon}></div>
          <h4 className={styles.subheading}>Auditing</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque lorem, 
            vulputate vitae ullamcorper vitae, mattis finibus enim. </p>
        </div>
        <div>
          <div className={styles.icon}></div>
          <h4 className={styles.subheading}>Advisors</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque lorem, 
            vulputate vitae ullamcorper vitae, mattis finibus enim. </p>
        </div>
      </div>
    </section>
  )
}

export default Services
