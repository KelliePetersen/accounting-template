import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.linkbox}>
      <Link className={styles.logo} to="/#">
        Heron<span className={styles.span}>.AU</span>
      </Link>
    </div>
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#services">Services</Link></li>
        <li><Link to="/#features">Features</Link></li>
        <li><Link to="/#location">Location</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
    <div className={styles.linkbox}>
      <Link className={styles.contact} to="/#contact">
        Say hello.
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
