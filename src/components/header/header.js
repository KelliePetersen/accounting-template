import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div>
      <Link to="/#">
        {siteTitle}
      </Link>
    </div>
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#services">Services</Link></li>
        <li><Link to="/#features">Features</Link></li>
        <li><Link to="/#location">Location</Link></li>
        <li><Link to="/#contact">Contact</Link></li>
      </ul>
    </nav>
    <div>
      <Link to="/#contact">
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
