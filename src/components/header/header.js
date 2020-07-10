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
      <div className={`${styles.linkbox} ${styles.logobox}`}>
        <Link className={styles.logo} to="/#">
          Heron<span className={styles.span}>.AU</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><Link to="/#">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#services">Services</Link></li>
          <li><Link to="/#features">Features</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </nav>
      <div className={`${styles.linkbox} ${styles.contactbox}`}>
        <Link className={styles.contact} to="/#contact">
          Say hello.
        </Link>
      </div>
    </header>
  )
}

export default Header
