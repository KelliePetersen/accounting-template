import React from 'react'
import styles from './features.module.scss'

const Features = () => (
  <section className={styles.features} id='features'>
    <div className="wrapper">
      <h2>Our specialisations.</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h4 className={styles.subheading}>Taxation</h4>
          <p className={styles.text}>Income Tax, FBT, GST</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h4 className={styles.subheading}>Investment</h4>
          <p className={styles.text}>Stock management</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h4 className={styles.subheading}>Super&shy;annuation</h4>
          <p className={styles.text}>Self managed funds</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h4 className={styles.subheading}>Estate Planning</h4>
          <p className={styles.text}>Inheritance & Succession</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h4 className={styles.subheading}>Start-Ups</h4>
          <p className={styles.text}>Sole, Partnerships & Companies</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h4 className={styles.subheading}>Acquisitions</h4>
          <p className={styles.text}>Smooth change of ownership</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h4 className={styles.subheading}>Business Advisory</h4>
          <p className={styles.text}>Guidance & Support</p>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}></div>
          <h4 className={styles.subheading}>Finance & Insurance</h4>
          <p className={styles.text}>Advice & Guidance</p>
        </div>
      </div>
    </div>
  </section>
)

export default Features
