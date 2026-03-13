import { welcome } from "./assets";
import styles from "./BootScreen.module.scss";
import { useEffect } from "react";

export default function BootScreen({ onFinish }: { onFinish: () => void }) {

  useEffect(() => {
    function updateVh() {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }
    updateVh();
    window.addEventListener('resize', updateVh);
    return () => window.removeEventListener('resize', updateVh);
  }, []);

  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.boot}>
      <img src={welcome} alt="Windows XP" className={styles.logo} />
      <div className={styles.loadingBar}>
        <div className={styles.segment}></div>
        <div className={styles.segment}></div>
        <div className={styles.segment}></div>
      </div>
    </div>
  );
}