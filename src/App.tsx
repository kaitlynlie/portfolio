import React, { useState } from 'react'
import { Navbar, Hero, AboutMe, Portfolio, Work, Contact, Footer } from '../pages'
import styles from './App.module.scss'
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react'
import Social from '../components/sidebar'
import Email from '../components/emailbar';
import styled, { ThemeProvider } from 'styled-components';

const App = () => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  return (
    <div className={clsx(styles.app)}>
      <Navbar />
      <Social />
      <Email />
      <Hero />
      <AboutMe />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App