import React from 'react'
import clsx from 'clsx'
import styles from './Contact.module.scss'
import { mail, linkedinDk } from '../assets'
import { ContactForm } from '../components/ContactForm'

const Contact = () => {
  return (
    <section className={clsx(styles.contact)} id='contact'>
        <h2>#CONTACT</h2>

        <div className={clsx(styles.info)}>
            <div className={clsx(styles.contact)}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default Contact