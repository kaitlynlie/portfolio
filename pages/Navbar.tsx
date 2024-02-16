import React from 'react'
import clsx from 'clsx'
import styles from './Navbar.module.scss'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={clsx(styles.navbar)}>
        <div className={clsx(styles.tabs)}>
            <ul>
                <a href='#home'>#home</a>
                <a href='#about'>#about</a>
                <a href='#work'>#work</a>
                <a href='#projects'>#projects</a>
                <a href='#contact' className={clsx(styles.rightmost)}>#contact</a>
            </ul>
        </div>

        <div className={clsx(styles.toggle)}>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className={clsx(styles.dropdown)}>
          <div>
            <ul>
              <a href='#home'>#home</a>
              <a href='#about'>#about</a>
              <a href='#work'>#work</a>
              <a href='#projects'>#projects</a>
              <a href='#contact'>#contact</a>
            </ul>
          </div>
        </div>
        )}
        </div>
    </nav>
  )
}

export default Navbar