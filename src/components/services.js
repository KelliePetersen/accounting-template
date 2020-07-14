import React from 'react'
import styles from "./services.module.scss"

const Services = () => {
  return (
    <section className="section" id='services'>
      <div className="wrapper">
        <h2 style={{maxWidth: '750px', lineHeight: '1.4'}}>We focus on helping your business, from idea to launch.</h2>
        <div className={styles.grid}>
          <div>
            <p className={styles.icon}>01.</p>
            <h4 className={styles.subheading}>Accounting</h4>
            <p>We ensure that your tax returns meet reporting and compliance requirements while
              minimising the impact of taxes on your bottom line.</p>
          </div>
          <div>
            <p className={styles.icon}>02.</p>
            <h4 className={styles.subheading}>Auditing</h4>
            <p>Our team delivers minimised business risks. We lend credibility to your
              financial statements, and provide constructive solutions.</p>
          </div>
          <div>
            <p className={styles.icon}>03.</p>
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
