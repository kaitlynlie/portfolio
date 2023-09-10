import React from 'react'
import { Navbar, Hero, AboutMe, Portfolio, Work, Contact, Footer } from '../pages'
import styles from './App.module.scss'
import clsx from 'clsx';

const App = () => (
  <div className={clsx(styles.app)}>
      <Navbar />

    <Hero />
    <AboutMe />
    <Work />
    <Portfolio />
    <Contact />
    <Footer />
    {/* <TechStack /> */}
  </div>
  );

export default App