import React, { useState } from 'react'
import { Navbar, Hero, AboutMe, Portfolio, Work, Contact, Footer, Languages } from '../pages'
import styles from './App.module.scss'
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react'
import Social from '../components/sidebar'
import Email from '../components/emailbar';
import { logo } from '../assets';

const App = () => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <div className={clsx(styles.app)}>
      <div className={styles.leftColumn}>
        {/* <img src={logo} className={clsx(styles.logo)} /> */}
        {/* <Social />
        <Email /> */}
        <Hero />
      </div>
      <div className={styles.rightColumn}>
        {/* <Hero /> */}
        <AboutMe />
        <Work />
        {/* <Languages /> */}
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
