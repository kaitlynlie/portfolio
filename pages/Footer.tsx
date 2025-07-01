import React from 'react'
import clsx from 'clsx'
import styles from './Footer.module.scss'
import { linkedin, github } from '../assets'

const Footer = () => {
  return (
    <section className={clsx(styles.footer)}>
       <div className={clsx(styles.container)} >
            <h4>Made by Kaitlyn Li &hearts;</h4>
       </div>
    </section>
  )
}

export default Footer