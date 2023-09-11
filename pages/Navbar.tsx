import React from 'react'
import clsx from 'clsx'
import styles from './Navbar.module.scss'
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={clsx(styles.navbar)}>
        <div className={clsx(styles.tabs)}>
            <ul>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#work'>Work</a>
                <a href='#projects'>Projects</a>
                <a style={{marginRight: 116}} href='#contact'>Contact</a>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar