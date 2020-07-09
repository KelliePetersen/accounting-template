import React from 'react'
import styles from "./slideshow.module.scss"
import Image from "./image"


const Slideshow = () => (
  <div className={styles.slideshow}>
    <div className={styles.container}>
      <Image />
    </div>
    <div className={styles.nav}>
      <div className={styles.leftarrow}>&larr;</div>
      <div className={styles.rightarrow}>&rarr;</div>
    </div>
  </div>
)

export default Slideshow
