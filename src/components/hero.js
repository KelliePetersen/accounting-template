import React from "react"
import { Link } from "gatsby"
import styles from "./hero.module.scss"
import Image from "./image"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image filename="landing.jpg" />
      <div className={styles.container}>
        <h1 className={styles.heading}>Chartered accountants focused on prosperity and growth.</h1>
        <Link className={styles.button} to="#services">LEARN MORE</Link>
      </div>
    </div>
  )
}

export default Hero
