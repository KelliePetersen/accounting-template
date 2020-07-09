import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styles from "./hero.module.scss"
import Image from "./image"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image className={styles.image} />
      <div className={styles.container}>
        <h1 className={styles.heading}>This be where our super amazing title goes.</h1>
        <Link className={styles.button} to="#services">LEARN MORE</Link>
      </div>
    </div>
  )
}

export default Hero
