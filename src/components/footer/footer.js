import PropTypes from "prop-types"
import React from 'react'
import { Link } from "gatsby"
import styles from "./footer.module.scss"

const Footer = ({ siteTitle }) => (
  <footer className={styles.footer}>
    <div styles className={styles.leftcontainer}>
      <h4>Heron<span>.AU</span></h4>
      <p className={styles.copyright}>© Copyright {siteTitle} {new Date().getFullYear()}. All rights reserved.</p>
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
        vulputate vitae ullamcorper vitae, mattis finibus enim.</p>
      <button className={styles.topbutton}>&uarr;</button>
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
