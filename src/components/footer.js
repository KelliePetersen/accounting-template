import PropTypes from "prop-types"
import React from 'react'
import { Link } from "gatsby"
import styles from "./footer.module.scss"

const Footer = ({ siteTitle }) => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <div styles className={styles.leftcontainer}>
        <Link className={styles.logo} to="#">Heron<span className={styles.span}>.AU</span></Link>
      </div>
      <div className={styles.rightcontainer}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li><Link to="/#">Home</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#features">Features</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </nav>
        <p className={styles.text}>Heron Bookkeeping has proudly been serving the Capricorn Coast
        since 1953.</p>
        <Link className={styles.toplink} to="#">&uarr;</Link>
      </div>
    </div>
    <p className={styles.copyright}>© {siteTitle} {new Date().getFullYear()}.</p>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
