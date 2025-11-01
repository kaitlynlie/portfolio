import { me, welcome } from "./assets";
import styles from "./LoginScreen.module.scss";
import startupSound from "./assets/Microsoft Windows XP Startup Sound.mp3";

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {

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