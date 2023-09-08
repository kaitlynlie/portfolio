import React from 'react'
import clsx from 'clsx'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={clsx(styles.navbar)}>
        <div className={clsx(styles.tabs)}>
            <ul>
                <a>Home</a>
                <a>About</a>
                <a>Projects</a>
                <a style={{marginRight: 116}}>Contact</a>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar