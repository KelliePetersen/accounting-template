import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const Header = () => {
  const [navStyle, setNavStyle] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY >= 500) {
        setNavStyle(true)
      } else {
        setNavStyle(false)
      }
    })
  })
  
  return (
    <header className={`${styles.header} ${navStyle && styles.active}`}>
      <Link className={`${styles.linkbox} ${styles.logobox}`} to="/#">
        <span className={styles.logo}>
          Heron<span className={styles.span}>.AU</span>
        </span>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><Link to="/#">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#services">Services</Link></li>
          <li><Link to="/#features">Features</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </nav>
      <Link className={`${styles.linkbox} ${styles.contactbox}`} to="/#">
        <span className={styles.contact}>
          Say hello.
        </span>
      </Link>
    </header>
  )
}

export default Header
