import React from 'react'
import { Navbar, Hero, AboutMe, Portfolio, Work, Contact, Footer } from '../pages'
import styles from './App.module.scss'
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react'

const App = () => (
  <div className={clsx(styles.app)}>
      <Navbar />

    <Hero />
    <AboutMe />
    <Work />
    <Portfolio />
    <Contact />
    <Footer />
    <Analytics />
  </div>
  );

export default App