import styles from "./BSODScreen.module.scss";
import bsodSound from "../public/bsod.ogg";
import { useEffect } from "react";

export default function BSODScreen() {

    useEffect(() => {
        const audio = new Audio(bsodSound);
        audio.volume = 0.8;
        audio.play().catch(() => {});
    }, []);

  return (
    <div className={styles.bsod}>
      <div className={styles.content}>
        <p>A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>
        <br />
        <p>VISITOR_INITIATED_SHUTDOWN</p>
        <br />
        <p>If this is the first time you've seen this stop error screen, restart your computer. If this screen appears again, follow these steps:</p>
        <br />
        <p>Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need.</p>
        <br />
        <p>If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode.</p>
        <br />
        <p>Technical information:</p>
        <br />
        <p>*** STOP: 0x0000007E (0xC0000005, 0xF86B2798, 0xF86B2794)</p>
        <br />
        <p>Beginning dump of physical memory...</p>
        <p>Physical memory dump complete.</p>
        <br />
        <p>Thank you for visiting my portfolio! - Kaitlyn</p>
      </div>
    </div>
  );
}