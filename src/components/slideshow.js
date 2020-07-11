import React from 'react'
import Carousel from 'nuka-carousel';
import styles from "./slideshow.module.scss"
import Image from "./image"


const Slideshow = () => {
  
  return (
  <div className={styles.slideshow}>
    <Carousel 
      className={styles.container}
      renderCenterLeftControls={null}
      renderCenterRightControls={null}
      renderBottomCenterControls={null}
      renderBottomLeftControls={({ previousSlide }) => (
        <button className={styles.leftarrow} onClick={previousSlide}>&larr;</button>
      )}
      renderBottomRightControls={({ nextSlide }) => (
        <button className={styles.rightarrow} onClick={nextSlide}>&rarr;</button>
      )}
    >
      <Image />
      <Image />
      <Image />
    </Carousel>
  </div>
)}

export default Slideshow
