import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Navbar.module.scss';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    if (toggleMenu) {
      console.log('Scroll detected - closing menu');
      setToggleMenu(false);
    }
  };

  // Listen on document in capture phase to catch scroll events bubbling up from any scroll container
  document.addEventListener('scroll', handleScroll, true);

  return () => {
    document.removeEventListener('scroll', handleScroll, true);
  };
}, [toggleMenu]);

  return (
    <nav className={clsx(styles.navbar)}>
      <div className={clsx(styles.tabs)}>
        <ul>
          <a href="#home" onClick={() => setToggleMenu(false)}>#home</a>
          <a href="#about" onClick={() => setToggleMenu(false)}>#about</a>
          <a href="#work" onClick={() => setToggleMenu(false)}>#work</a>
          <a href="#languages" onClick={() => setToggleMenu(false)}>#languages</a>
          <a href="#projects" onClick={() => setToggleMenu(false)}>#projects</a>
          <a href="#contact" className={clsx(styles.rightmost)} onClick={() => setToggleMenu(false)}>#contact</a>
          <a className={clsx(styles.button)} onClick={() => setToggleMenu(false)} href='https://drive.google.com/file/d/1vnNty9lyedqHmXPbxmWK7rMWGaGfx00V/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a>
        </ul>
      </div>

      <div className={clsx(styles.toggle)}>
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className={clsx(styles.dropdown)}>
            <ul>
              <a href="#home" onClick={() => setToggleMenu(false)}>#home</a>
              <a href="#about" onClick={() => setToggleMenu(false)}>#about</a>
              <a href="#work" onClick={() => setToggleMenu(false)}>#work</a>
              <a href="#languages" onClick={() => setToggleMenu(false)}>#languages</a>
              <a href="#projects" onClick={() => setToggleMenu(false)}>#projects</a>
              <a href="#contact" onClick={() => setToggleMenu(false)}>#contact</a>
              <a onClick={() => setToggleMenu(false)} href='https://drive.google.com/file/d/1vnNty9lyedqHmXPbxmWK7rMWGaGfx00V/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
