import React from "react"
import { Link } from "gatsby"
import styles from "./hero.module.scss"
import Image from "./image"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image filename="landing.jpg" />
      <div className={styles.container}>
        <h1 className={styles.heading}
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >Chartered accountants focused on prosperity and growth.</h1>
        <Link className={styles.button} to="#services"
          data-sal="slide-right"
          data-sal-delay="700"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >LEARN MORE</Link>
      </div>
    </div>
  )
}

export default Hero
