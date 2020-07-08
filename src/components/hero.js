import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styles from "./hero.module.scss"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1>This be where our sexy heading goes.</h1>
        <Link to="#services">LEARN MORE</Link>
      </div>
    </div>
  )
}

export default Hero
