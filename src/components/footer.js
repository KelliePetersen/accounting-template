import PropTypes from "prop-types"
import React from 'react'
import { Link } from "gatsby"
import styles from "./footer.module.scss"

const Footer = ({ siteTitle }) => (
  <footer className={styles.footer}>
    <div styles className={styles.leftcontainer}>
      <Link className={styles.logo} to="#">Heron<span className={styles.span}>.AU</span></Link>
      <p className={styles.copyright}>© {siteTitle} {new Date().getFullYear()}.</p>
    </div>
    <div className={styles.rightcontainer}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li><Link to="/#about">About</Link></li>
          <li><Link to="/#services">Services</Link></li>
          <li><Link to="/#features">Features</Link></li>
          <li><Link to="/#location">Location</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </nav>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque lorem, 
        vulputate mattis finibus enim.</p>
      <Link className={styles.toplink} to="#">&uarr;</Link>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
