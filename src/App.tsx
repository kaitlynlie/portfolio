import { useState, useEffect } from "react";
import styles from "./App.module.scss";
import clsx from "clsx";
import { briefcase, mail, projects, aboutme, info } from "./assets";
import Footer from "./Footer";
import Contact from "./Contact";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Info from "./Info";
import BootScreen from "./BootScreen";
import LoginScreen from "./LoginScreen";
import BSODScreen from "./BSODScreen";
import { Analytics } from "@vercel/analytics/react"

interface Window {
  id: string;
  title: string;
  icon: string;
  component: React.ReactNode;
  zIndex?: number;
}

function App() {
  const [windows, setWindows] = useState<Window[]>([]);
  const [topZ, setTopZ] = useState(1);
const [screen, setScreen] = useState<"boot" | "login" | "desktop" | "bsod">("boot");

  useEffect(() => {
    function updateVh() {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }

    updateVh();
    window.addEventListener('resize', updateVh);
    window.addEventListener('orientationchange', updateVh);

    return () => {
      window.removeEventListener('resize', updateVh);
      window.removeEventListener('orientationchange', updateVh);
    };
  }, []);

  const openWindow = (
  id: string,
  title: string,
  icon: string,
  component: React.ReactNode
  ) => {
    setWindows((prev) => {
      const alreadyOpen = prev.find((w) => w.id === id);
      if (alreadyOpen) return prev;
      return [
        ...prev,
        { id, title, icon, component, zIndex: topZ + prev.length } as any,
      ];
    });
  };


  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  if (screen === "boot") return <BootScreen onFinish={() => setScreen("login")} />;
  if (screen === "login") return <LoginScreen onLogin={() => { setWindows([]); setScreen("desktop"); }} />;
  if (screen === "bsod") return <BSODScreen />;

  //console.log("current screen:", screen);

  return (
    <>
      <div className={clsx(styles.home)}>
        <div className={clsx(styles.icons)}>
        <div className={clsx(styles.app)}>
          <button
            onClick={() =>
              openWindow("contact", "Contact Me", mail, <Contact onClose={() => closeWindow("contact")} />)
            }
          >
            <img src={mail} alt="mail" />
            <p>Contact Me</p>
          </button>
        </div>

          <div className={clsx(styles.app)}>
            <button
              onClick={() =>
                openWindow("workexperience", "Work Experience", briefcase, <WorkExperience onClose={() => closeWindow("workexperience")} />)
              }
            >
            <img src={briefcase} alt="briefcase" />
            <p>Work <br /> Experience</p>
          </button>
        </div>

          {/* <div className={clsx(styles.app)}>
          <button
            onClick={() =>
              openWindow("skills", "Skills", skills, <Skills onClose={() => closeWindow("skills")} />)
            }
          >
            <img src={skills} alt="skills" />
            <p>Skills</p>
          </button>
        </div> */}

          <div className={clsx(styles.app)}>
            <button
              onClick={() =>
                openWindow("projects", "Projects", projects, <Projects onClose={() => closeWindow("projects")} />)
              }
            >
            <img src={projects} alt="projects" />
            <p>Projects</p>
          </button>
        </div>

          <div className={clsx(styles.app)}>
            <button
              onClick={() =>
                openWindow("aboutme", "About Me", aboutme, <AboutMe onClose={() => closeWindow("aboutme")} />)
              }
            >
            <img src={aboutme} alt="about me" />
            <p>About Me</p>
          </button>
        </div>

          <div className={clsx(styles.app)}>
            <button
              onClick={() =>
                openWindow("info", "info.txt", info, <Info onClose={() => closeWindow("info")} />)
              }
            >
              <img src={info} alt="info" />
              <p>info.txt</p>
            </button>
          </div>
        </div>

        {windows.map((win) => (
        <div
          key={win.id}
          className={clsx(styles.window)}
          style={{ zIndex: win.zIndex }}
          onMouseDown={() => {
            setTopZ(topZ + 1);
            setWindows((prev) =>
              prev.map((w) =>
                w.id === win.id ? { ...w, zIndex: topZ + 1 } : w
              )
            );
          }}
        >
          {win.component}
        </div>
      ))}

      </div>

      <Footer
        windows={windows}
        onSelect={(id) => {
          setTopZ((prev) => prev + 1);
          setWindows((prev) =>
            prev.map((w) => w.id === id ? { ...w, zIndex: topZ + 1 } : w)
          );
        }}
        onOpenWindow={(id) => {
          const map: Record<string, { title: string; icon: string; component: React.ReactNode }> = {
            contact: { title: "Contact Me", icon: mail, component: <Contact onClose={() => closeWindow("contact")} /> },
            workexperience: { title: "Work Experience", icon: briefcase, component: <WorkExperience onClose={() => closeWindow("workexperience")} /> },
            projects: { title: "Projects", icon: projects, component: <Projects onClose={() => closeWindow("projects")} /> },
            aboutme: { title: "About Me", icon: aboutme, component: <AboutMe onClose={() => closeWindow("aboutme")} /> },
            info: { title: "info.txt", icon: info, component: <Info onClose={() => closeWindow("info")} /> },
          };
          const win = map[id];
          if (win) openWindow(id, win.title, win.icon, win.component);
        }}
        onLogOff={() => { console.log("logging off, screen ->", screen); setScreen("login"); }}
        onShutdown={() => setScreen("bsod")}
      />

      <Analytics />
    </>
  );
}

export default App;