import React from 'react'
import { Navbar, Hero, AboutMe, Portfolio } from '../pages'
import styles from './App.module.scss'
import clsx from 'clsx';

const App = () => (
  <div className={clsx(styles.app)}>
      <Navbar />

    <Hero />
    <AboutMe />
    <Portfolio />
    {/* <TechStack /> */}
  </div>
  );

export default App