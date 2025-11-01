import styles from "./Footer.module.scss";
import clsx from "clsx";
import { volume, windowsxp } from "./assets";

interface FooterProps {
  windows: { id: string; title: string; icon: string }[];
  onSelect: (id: string) => void;
}

function Footer({ windows, onSelect }: FooterProps) {
  const time = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <div className={clsx(styles.footer)}>
      <div className={clsx(styles.start)}>
        <button>
          <img src={windowsxp} alt="windowsxp" />
          <p>start</p>
        </button>
      </div>

      <div className={clsx(styles.tasks)}>
        {windows.map((win) => (
          <div
            key={win.id}
            className={clsx(styles.task)}
            onClick={() => onSelect(win.id)}
          >
            <img src={win.icon} alt={win.title} className={clsx(styles.taskIcon)} />
            <span>{win.title}</span>
          </div>
        ))}
      </div>

      <div className={clsx(styles.right)}>
        <img src={volume} alt="volume" />
        <p>{time}</p>
      </div>
    </div>
  );
}

export default Footer;
