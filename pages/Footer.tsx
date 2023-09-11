import React from 'react'
import clsx from 'clsx'
import styles from './Footer.module.scss'
import { linkedin, github } from '../src'

const Footer = () => {
  return (
    <section className={clsx(styles.footer)}>
       <div className={clsx(styles.container)} >
            <h4>Copyright © 2023. All rights reserved.</h4>

            <div className={clsx(styles.icons)}>
                <a href='https://www.linkedin.com/in/kaitlyn-li-0922/'><img src={linkedin} /></a>
                <a href='https://github.com/kaitlynlie'><img src={github} /></a>
            </div>
       </div>
    </section>
  )
}

export default Footer