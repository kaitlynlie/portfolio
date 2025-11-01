import { welcome } from "./assets";
import styles from "./BootScreen.module.scss";

export default function BootScreen() {
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