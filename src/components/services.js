import React from 'react'
import styles from "./services.module.scss"

const Services = () => {
  return (
    <section className="section" id='services'>
      <div className="wrapper">
        <h2>Our Services.</h2>
        <div className={styles.grid}>
          <div>
            <div className={styles.icon}></div>
            <h4 className={styles.subheading}>Accounting</h4>
            <p>We ensure that your tax returns meet reporting and compliance requirements while
              minimising the impact of taxes on your bottom line.</p>
          </div>
          <div>
            <div className={styles.icon}></div>
            <h4 className={styles.subheading}>Auditing</h4>
            <p>Our dedicated team ensures minimised business risks. We give credibility to your
              financial statements, and provide constructive outcomes and solutions.</p>
          </div>
          <div>
            <div className={styles.icon}></div>
            <h4 className={styles.subheading}>Advisors</h4>
            <p>We advise clients on successful business structures and strategies, financial viability, 
              diversification, planned growth and more.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
