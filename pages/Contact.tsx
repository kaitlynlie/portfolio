import React from 'react'
import clsx from 'clsx'
import styles from './Contact.module.scss'
import { mail, linkedinDk } from '../src'

const Contact = () => {
  return (
    <section className={clsx(styles.contact)} id='contact'>
        <h2>CONTACT</h2>
        <h4>Here are my socials!</h4>
        
        <div className={clsx(styles.info)}>
            <span>
                <img src={mail}/>
            </span>

            <div className={clsx(styles.contact)}>
                <h3>Mail</h3>
                <a href='mailto:kaitlynli0903@gmail.com'>kaitlynli0903@gmail.com</a>
            </div>

            <span className={clsx(styles.linkedin)}>
                <img src={linkedinDk}/>
            </span>
            <div className={clsx(styles.contact)}>
                <h3>LinkedIn</h3>
                <a href='https://www.linkedin.com/in/kaitlyn-li-0922/'>kaitlyn-li-0922</a>
            </div>
        </div>
    </section>
  )
}

export default Contact