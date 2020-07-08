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
    <nav>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Features</li>
        <li>Location</li>
        <li>Contact</li>
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
