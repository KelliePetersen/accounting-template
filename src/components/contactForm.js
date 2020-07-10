import React from 'react'
import styles from './contactForm.module.scss'

const ContactForm = () => (
  <form className={styles.form} method="post">
    <div>
      <label>Full name</label>
      <input className={styles.input} type="text" name="name" required/>
    </div>
    <div>
      <label>Email</label>
      <input className={styles.input} type="email" name="email" required/>
    </div>
    <div>
      <label>Message</label>
      <textarea className={styles.input} name="message" rows="5"></textarea>
    </div>
    <button type="submit" className={styles.button}>Send message</button>
  </form>
)

export default ContactForm
