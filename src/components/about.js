import React from 'react'
import styles from "./about.module.scss"

const About = () => (
    <section className={styles.about} id="about">
      <div className={styles.wrapper}>
        <div>
          <h2>We've been in this game for 40 years.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque lorem, vulputate vitae ullamcorper
            vitae, mattis finibus enim. Sed blandit neque leo, eu facilisis libero mollis ut. </p>
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
