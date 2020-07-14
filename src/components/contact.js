import React from 'react'
import ContactForm from '../components/contactForm'
import styles from './contact.module.scss'

const Contact = () => (
  <section className={styles.contact} id="contact"
    data-sal="slide-up"
    data-sal-duration="500"
    data-sal-easing="ease"
  >
    <div className='wrapper'>
        <h2 className={styles.heading}>Ready? Let's work together.</h2>
        <ContactForm action="https://www.flexyform.com/f/10efb9385a906641cd00edc07c0dc32d01f3faa6"></ContactForm>
    </div>
  </section>
)

export default Contact
