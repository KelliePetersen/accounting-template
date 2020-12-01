import React from 'react'
import styles from "./about.module.scss"
import Image from "./image"

const About = () => (
    <section className="section" id="about" 
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-duration="1000"
      data-sal-easing="ease"
    >
      <div className={`wrapper ${styles.wrapper}`}>
        <div>
          <h2 className={styles.heading}>Assisting people and businesses for over 60 years.</h2>
          <p className={styles.paragraph}>We've helped over 1000 people shape their financial success and reach their personal and business financial goals. 
            Whether you are an individual, in business or retired, we will work with you towards achieving your goals. </p>
        </div>
        <div>
          <div className={styles.grid}>
            <Image filename="grid-1.jpg" />
            <Image filename="grid-3.jpg" />
          </div>
          <div className={`${styles.grid} ${styles.grid2}`}>
            <Image filename="grid-2.jpg" />
            <Image filename="grid-4.jpg" />
          </div>
        </div>
      </div>
    </section>
  )

export default About
