import { me, welcome } from "./assets";
import styles from "./LoginScreen.module.scss";
import startupSound from "./assets/Microsoft Windows XP Startup Sound.mp3";
import { useEffect } from "react";

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  
  // for mobile
  useEffect(() => {
    function updateVh() {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }
    updateVh();
    window.addEventListener('resize', updateVh);
    return () => window.removeEventListener('resize', updateVh);
  }, []);

  const handleLoginClick = () => {
    const audio = new Audio(startupSound);
    audio.volume = 0.5;
    audio.play().catch(err => console.error("Audio play failed:", err));

    onLogin();
  };

  return (
    <div className={styles.login}>
        <div className={styles.header} />
        <div className={styles.content}>
          <div className={styles.left}>
            <img src={welcome} alt="Welcome" className={styles.welcomeImage} />
            <p>To start, please select my user account.</p>
          </div>

          <div className={styles.line} />

          <div className={styles.userCard} onClick={handleLoginClick}>
              <img src={me} alt="User" />
              <p>Kaitlyn</p>
          </div>
        </div>

        <div className={styles.footer} />
    </div>
  );
}