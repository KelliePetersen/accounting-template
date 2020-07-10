import React from 'react'
import ContactForm from '../components/ContactForm'
import styles from './contact.module.scss'

const Contact = () => (
  <section className={styles.contact} id="contact">
      <div className={styles.wrapper}>
          <h2>Ready? Let's work together.</h2>
          <ContactForm></ContactForm>
      </div>
    </section>
)

export default Contact