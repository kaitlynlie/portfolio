import { useState, useEffect, useRef } from "react";
import styles from "./Footer.module.scss";
import clsx from "clsx";
import { volume, windowsxp, projects, briefcase, mail, aboutme, greentriangle, info, logout, power } from "./assets";

interface FooterProps {
  windows: { id: string; title: string; icon: string }[];
  onSelect: (id: string) => void;
  onOpenWindow: (id: string) => void;
}

function Footer({ windows, onSelect, onOpenWindow }: FooterProps) {
  const [startOpen, setStartOpen] = useState(false);
  const time = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!startOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) {
        setStartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [startOpen]);

  return (
    <>
      {/* START MENU */}
      {startOpen && (
        <div ref={menuRef} className={clsx(styles.startmenu)}>
          {/* TOP BANNER */}
          <div className={clsx(styles.banner)}>
            <div className={clsx(styles.avatar)} />
            <h2>Kaitlyn</h2>
          </div>

          <div className={clsx(styles.body)}>
            <div className={clsx(styles.divider)} />
            
            <div className={clsx(styles.container)}>
              {/* LEFT PANEL */}
              <div className={clsx(styles.left)}>
                <div className={clsx(styles.app)}>
                  <button onClick={() => { onOpenWindow("projects"); setStartOpen(false); }}>
                    <div className={clsx(styles.image)}>
                      <img src={projects} alt="projects" />
                    </div>

                    <div className={clsx(styles.label)}>
                      <h3>Projects</h3>
                      <p>See my projects</p>
                    </div>
                  </button>

                  <button onClick={() => { onOpenWindow("workexperience"); setStartOpen(false); }}>
                    <div className={clsx(styles.image)}>
                      <img src={briefcase} alt="briefcase" />
                    </div>

                    <div className={clsx(styles.label)}>
                      <h3>Work Experience</h3>
                      <p>See my work experience</p>
                    </div>
                  </button>

                  <button onClick={() => { onOpenWindow("contact"); setStartOpen(false); }}>
                    <div className={clsx(styles.image)}>
                      <img src={mail} alt="mail" />
                    </div>

                    <div className={clsx(styles.label)}>
                      <h3>Contact Me</h3>
                      <p>Get in touch with me</p>
                    </div>
                  </button>

                  <button onClick={() => { onOpenWindow("aboutme"); setStartOpen(false); }}>
                    <div className={clsx(styles.image)}>
                      <img src={aboutme} alt="aboutme" />
                    </div>

                    <div className={clsx(styles.label)}>
                      <h3>About Me</h3>
                      <p>Get to know me!</p>
                    </div>
                  </button>
                </div>

                <div className={clsx(styles.bottom)}>
                  <div className={clsx(styles.line)} />
                  <div className={clsx(styles.allprogramsbutton)}>
                    <div className={clsx(styles.allprograms)} onClick={() => window.open("https://github.com/kaitlynlie", "_blank")}>All Programs</div>
                    <img src={greentriangle} alt="triangle" className={clsx(styles.triangle)} />
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className={clsx(styles.right)}>
                <button onClick={() => { onOpenWindow("info"); setStartOpen(false); }}>
                  <div className={clsx(styles.image)}>
                    <img src={info} alt="info" />
                  </div>

                  <div className={clsx(styles.label)}>
                    <h3>info.txt</h3>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className={clsx(styles.startfooter)}>
            <div className={clsx(styles.startbuttons)}>
              <button className={clsx(styles.menuaction)}>
                <img src={logout} alt="logout" />
                <p>Log Off</p>
              </button>
              <button className={clsx(styles.menuaction)}>
                <img src={power} alt="power" />
                <p>Turn Off Computer</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TASKBAR */}
      <div className={clsx(styles.footer)}>
        <div className={clsx(styles.start)}>
          <button ref={buttonRef} onClick={() => setStartOpen((prev) => !prev)}>
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
    </>
  );
}

export default Footer;