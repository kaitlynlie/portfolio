import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Hero, AboutMe, Portfolio, Work, Contact, Footer, Languages } from '../pages'
import styles from './App.module.scss'
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react'
import { linkedInLight, githubLight, goodreadsLight, volumeOff, volumeOn } from '../assets';

const App = () => {
  //const isHome = location.pathname === '/';

  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Set desired volume level
      if (!isMuted) {
        audioRef.current.play().catch(() => {}); // autoplay may be blocked by browser
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <div className={clsx(styles.app)}>
        <div className={clsx(styles.sidebar)}>
        <a href="https://www.linkedin.com/in/kaitlyn-li-0922/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInLight} alt="LinkedIn" />
        </a>

        <a href="https://github.com/kaitlynlie" target="_blank" rel="noopener noreferrer">
          <img src={githubLight} alt="GitHub" />
        </a>

        <a href='https://www.goodreads.com/user/show/61339920-kait' target="_blank" rel="noopener noreferrer">
          <img src={goodreadsLight} />
        </a>

        <button onClick={toggleMute} className={clsx(styles.volumeButton)}>
          <img src={isMuted ? volumeOff : volumeOn} alt="Volume Toggle" />
        </button>

    <div className={clsx(styles.line)} />
    <audio ref={audioRef} src="/fireflies.mp3" loop />
    </div>
        <div className={clsx(styles.fireflies)}>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className={clsx(styles.firefly)} />
          ))}
        </div>
        <Navbar />
        <Hero />
        <AboutMe />
        <Work />
        <Languages />
        <Portfolio />
        <Contact />
        <Footer />
        <Analytics />
    </div>
  );
}

export default App;
