import React from 'react'
import styles from './contactForm.module.scss'

const ContactForm = () => (
  <form className={styles.form} method="post">
    <label htmlFor="name">Full name
      <input className={styles.input} type="text" name="name" id="name" required/>
    </label>
    <label htmlFor="email">Email
      <input className={styles.input} type="email" name="email" id="email" required/>
    </label>
    <label htmlFor="message">Message
      <textarea className={styles.input} name="message" id="message" rows="5" required></textarea>
    </label>
    <button type="submit" className={styles.button}>Send message</button>
  </form>
)

export default ContactForm
