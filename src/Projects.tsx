import { useState } from "react";
import styles from "./Project.module.scss";
import clsx from "clsx";
import { cascade, documents, github, network, programs, projects, properties, react, shared, skills, supabase, typescript } from "./assets";
import { useWindowControls } from "./windows";
import { back, forward, up, search, folderopen, startmenu, book, go } from "./assets";

interface ProjectsProps {
  onClose: () => void;
}

export default function Projects({ onClose }: ProjectsProps) {
  const {
    position,
    size,
    windowRef,
    startDrag,
    startResize,
  } = useWindowControls({
    initialPosition: { x: 200, y: 100 },
    initialSize: { width: 300, height: 300 },
    minWidth: 200,
    minHeight: 150,
  });
  
  type roomId = "roomu";

  type View =
  | { type: "home" }
  | { type: "roomu"; id: roomId };
  const projectsData = {
    roomu: {
      title: "RoomU",
      description: "A roommate matching app for students at UC Davis. Built with my team at AggieWorks.",
      tech: [
      { name: "React", icon: react },
      { name: "TypeScript", icon: typescript },
      { name: "Supabase", icon: supabase },
      ],
      link: "https://aggieworks.org/products/roomu",
    },
  };

  const [history, setHistory] = useState<View[]>([{ type: "home" }]);
  const currentView = history[history.length - 1];

  const canGoBack = history.length > 1;

  const navigateTo = (view: View) => {
    setHistory((prev) => [...prev, view]);
  };

  const goBack = () => {
    if (!canGoBack) return;
    setHistory((prev) => prev.slice(0, -1));
  };

  return (
    <div
      ref={windowRef}
      className={styles.mail}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
      }}
    >
      <div
        className={clsx(styles.header)}
        onMouseDown={startDrag}
        style={{ cursor: "grab" }}
      >
        <div className={clsx(styles.leftheader)}>
          <img src={projects} alt="projects" />
          <p>Projects</p>
        </div>

        <div className={clsx(styles.rightheader)}>
          <button onClick={onClose}>
            <div className={clsx(styles.left)} />
            <div className={clsx(styles.right)} />
          </button>
        </div>
      </div>

      {/* TOP MENU BAR */}
      <div className={clsx(styles.functions)}>
        <div className={clsx(styles.leftfunctions)}>
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>Tools</button>
        </div>
        <div className={clsx(styles.rightfunctions)}></div>
      </div>

      {/* DIRECTIONS BAR */}
      <div className={clsx(styles.directions)}>
          <div className={clsx(styles.leftdirections)}>
            <div className={clsx(styles.back, !canGoBack && styles.disabled)} onClick={goBack}>
              <img src={back} alt="back" />
              <p>Back</p>
              <div className={clsx(styles.triangle)} />
            </div>

            <div className={clsx(styles.forward)}>
              <img src={forward} alt="forward" />
              <div className={clsx(styles.triangle)} />
            </div>

            <div className={clsx(styles.up)}>
              <img src={up} alt="up" />
            </div>

          </div>

          <div className={clsx(styles.line)} />

          <div className={clsx(styles.centerdirections)}>
            <div className={clsx(styles.search)}>
              <img src={search} alt="search" />
              <p>Search</p>
            </div>
            <div className={clsx(styles.folder)}>
              <img src={folderopen} alt="folder" />
              <p>Files</p>
            </div>
          </div>

          <div className={clsx(styles.line)} />

          <div className={clsx(styles.rightdirections)}>
            <div className= {clsx(styles.folderopen)}>
              <img src={startmenu} alt="start menu" />
              <div className={clsx(styles.triangle)} />
            </div>
          </div>
      </div>

      {/* ADDRESS BAR */}
      <div className={clsx(styles.address)}>
        <p>Address</p>
        <div className={clsx(styles.addressbar)}>
          <div className={clsx(styles.leftaddress)}>
            <img src={projects} alt="projects" />
            <p> Projects </p>
          </div>
          <div className={clsx(styles.rightaddress)}>
            <img src={go} alt="go" />
          </div>
        </div>
        <button onClick={() => window.open('https://drive.google.com/file/d/1vnNty9lyedqHmXPbxmWK7rMWGaGfx00V/view?usp=sharing', '_blank', 'noopener noreferrer')}>
          <img src={forward} alt="forward" />
        </button>
        <span>Go</span>
      </div>

      <div className={clsx(styles.body)}>
        <div className={clsx(styles.list)}>
          <div className={clsx(styles.systemtasks)}>
            <div className={clsx(styles.title)}>
              <h3>System Tasks</h3>
              <img src={cascade} alt="cascade" />
            </div>

            <div className={clsx(styles.task)}>
              <div className={clsx(styles.text)}>
                <img src={properties} alt="properties" />
                <p>View system information</p>
              </div>
            </div>

            <div className={clsx(styles.task)}>
              <div className={clsx(styles.text)}>
                <img src={programs} alt="programs" />
                <p>Add or remove programs</p>
              </div>
            </div>

            <div className={clsx(styles.task)}>
              <div className={clsx(styles.text)}>
                <img src={skills} alt="skills" />
                <p>Change a setting</p>
              </div>
            </div>

          </div>

          <div className={clsx(styles.systemtasks)}>
            <div className={clsx(styles.title)}>
              <h3>Other</h3>
              <img src={cascade} alt="cascade" />
            </div>

            <div className={clsx(styles.task)}>
              <div className={clsx(styles.text)}>
                <img src={network} alt="network" />
                <p>My Network</p>
              </div>
            </div>

            <div className={clsx(styles.task)}>
              <div className={clsx(styles.text)}>
                <img src={documents} alt="documents" />
                <p>My Documents</p>
              </div>
            </div>

            <div className={clsx(styles.task)}>
              <div className={clsx(styles.text)}>
                <img src={shared} alt="shared" />
                <p>Shared Documents</p>
              </div>
            </div>

            <div className={clsx(styles.task)}>
              <div className={clsx(styles.text)}>
                <img src={skills} alt="skills" />
                <p>Control Panel</p>
              </div>
            </div>

          </div>

          <div className={clsx(styles.systemtasks)}>
            <div className={clsx(styles.title)}>
              <h3>Details</h3>
              <img src={cascade} alt="cascade" />
            </div>

            <div className={clsx(styles.task)}>
              <div className={clsx(styles.text)}>
                <img src={github} alt="github" className={clsx(styles.github)} />
                <p>Github</p>
              </div>
            </div>

          </div>
        </div>

        <div className={clsx(styles.details)}>
        {currentView.type === "home" && (
          <div className={styles.websites}>
            <h2>Websites</h2>
            <div className={styles.line} />

            <div className={styles.items}>
              <div
                className={styles.item}
                onClick={() => navigateTo({ type: "roomu", id: "roomu" })}
              >
                <img src={skills} alt="RoomU" />
                <p>RoomU</p>
              </div>

      </div>
    </div>
  )}

  {currentView.type === "roomu" && (
    <div className={styles.project}>
      <h2>{projectsData[currentView.id].title}</h2>
      <p>{projectsData[currentView.id].description}</p>

      <div className={styles.groupbox}>
        <ul>
          {projectsData[currentView.id].tech.map((tech) => (
            <li key={tech.name} className={styles.techItem}>
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.projectLinks}>
        <a href={projectsData[currentView.id].link} target="_blank">Live Site</a>
      </div>
    </div>
  )}
</div>

      </div>

      <div
        className={clsx(styles.resizeHandle, styles.right)}
        onMouseDown={(e) => startResize(e, "right")}
      />

      <div
        className={clsx(styles.resizeHandle, styles.bottom)}
        onMouseDown={(e) => startResize(e, "bottom")}
      />

      <div
        className={clsx(styles.resizeHandle, styles.corner)}
        onMouseDown={(e) => startResize(e, "corner")}
      />
    </div>
  );
};