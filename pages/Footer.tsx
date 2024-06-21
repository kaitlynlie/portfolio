import React from 'react'
import clsx from 'clsx'
import styles from './Footer.module.scss'
import { linkedin, github } from '../assets'

const Footer = () => {
  return (
    <section className={clsx(styles.footer)}>
       <div className={clsx(styles.container)} >
            <h4>Copyright © 2024. Kaitlyn Li.</h4>

            {/* <div className={clsx(styles.icons)}>
                <a href='https://www.linkedin.com/in/kaitlyn-li-0922/'><img src={linkedin} /></a>
                <a href='https://github.com/kaitlynlie'><img src={github} /></a>
            </div> */}
       </div>
    </section>
  )
}

export default Footer