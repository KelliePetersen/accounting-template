import PropTypes from "prop-types"
import React from 'react'
import { Link } from "gatsby"
import styles from "./footer.module.scss"

const Footer = ({ siteTitle }) => (
  <footer className={styles.footer}>
    © Copyright {siteTitle} {new Date().getFullYear()}. All rights reserved.
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
