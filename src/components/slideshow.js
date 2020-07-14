import React, {useEffect } from 'react'
import Carousel from 'nuka-carousel';
import styles from "./slideshow.module.scss"
import Image from "./image"


const Slideshow = () => {
  useEffect(() => {
    let leftArrow = document.querySelector('.slider-control-bottomleft');
    leftArrow.style.right = '67px';
    leftArrow.style.left = 'auto';
  }, [])
  
  return (
  <div className={styles.slideshow}
    data-sal="slide-up"
    data-sal-duration="500"
    data-sal-easing="ease"
  >
    <Carousel
      style={{height: '100%', maxHeight: '550px'}}
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
      <Image filename="slideshow-1.jpg" styling={{minHeight: '400px', height: '70vh', maxHeight: '550px'}} />
      <Image filename="slideshow-2.jpg" styling={{minHeight: '400px', height: '70vh', maxHeight: '550px'}} />
      <Image filename="slideshow-3.jpg" styling={{minHeight: '400px', height: '70vh', maxHeight: '550px'}}  />
    </Carousel>
  </div>
)}

export default Slideshow
