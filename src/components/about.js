import React from 'react'
import styles from "./about.module.scss"

const About = () => (
    <section className="section"id="about">
      <div className={`wrapper ${styles.wrapper}`}>
        <div>
          <h2>Assisting people and businesses for over 60 years.</h2>
          <p>We've helped over 1000 people shape their financial success and reach their personal and business financial goals. 
            Whether you are an individual, in business or retired, we will work with you towards achieving your goals. </p>
        </div>
        <div>
          <div className={styles.grid}>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.grid} ${styles.grid2}`}>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )

export default About
