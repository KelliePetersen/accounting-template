import React from 'react'
import styles from "./slideshow.module.scss"
import Image from "./image"


const Slideshow = () => (
  <div className={styles.slideshow}>
    <div className={styles.container}>
      <Image />
    </div>
    <div className={styles.nav}>
      <button className={styles.leftarrow}>&larr;</button>
      <button className={styles.rightarrow}>&rarr;</button>
    </div>
  </div>
)

export default Slideshow
