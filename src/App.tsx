import React from 'react'
import { Navbar, Hero, } from '../pages'
import styles from './App.module.scss'
import clsx from 'clsx';

const App = () => (
  <div className={clsx(styles.app)}>
      <Navbar />

    <Hero />
    {/* <TechStack /> */}
  </div>
  );

export default App