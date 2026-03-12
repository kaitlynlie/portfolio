import { useState } from "react";
import styles from "./Project.module.scss";
import clsx from "clsx";
import { aoxa, aoxamockup, cafestop, cascade, css, digitalocean, django, documents, flask, github, html, javascript, network, pantry, programs, projects, properties, python, react, roomu, shared, skills, stroke, supabase, ttt, typescript } from "./assets";
import { useWindowControls } from "./windows";
import { back, forward, up, search, folderopen, startmenu, go, roomumock, pantrymock, tttmock, cafestopmock } from "./assets";

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
    initialPosition: { x: 120, y: 0 },
    initialSize: { width: 500, height: 600 },
    minWidth: 600,
    minHeight: 430,
  });
  
  type roomId = "roomu";
  type pantryId = "pantry";
  type strokeId = "stroke";
  type tttId = "ttt";
  type cafestopId = "cafestop";
  type aoxaId = "aoxa";

  type View =
  | { type: "home" }
  | { type: "roomu"; id: roomId }
  | { type: "pantry"; id: pantryId }
  | { type: "stroke"; id: strokeId }
  | { type: "ttt"; id: tttId }
  | { type: "cafestop"; id: cafestopId }
  | { type: "aoxa", id: aoxaId };

  const projectsData = {
    roomu: {
      category: "projects",
      title: "RoomU",
      description: "A roommate matching app for students at UC Davis. Built with my team at AggieWorks.",
      tech: [
      { name: "React", icon: react },
      { name: "TypeScript", icon: typescript },
      { name: "Supabase", icon: supabase },
      ],
      image: roomumock,
      link: "https://roomu.aggieworks.org",
    },
    pantry: {
      category: "projects",
      title: "ASUCD Pantry",
      description: "A web platform for UC Davis students to order nonperishable items from The Pantry in advance. The Pantry provides accessible food resources to students facing food insecurity, promotes food justice, reduces stigma around seeking assistance, and fosters a supportive campus community.",
      tech: [
      { name: "React", icon: react },
      { name: "Javascript", icon: javascript },
      { name: "Digital Ocean", icon: digitalocean },
      { name: "Django", icon: django },
      ],
      image: pantrymock,
      link: "https://order.thepantry.ucdavis.edu",
    },
    stroke: {
      category: "projects",
      title: "Stroke Prediction",
      description: "A stroke prediction model that predicts the likelihood of a person getting a stroke. Final project for ECS 171: Machine Learning.",
      tech: [
      { name: "Python", icon: python },
      { name: "Flask", icon: flask },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      ],
      link: "https://github.com/kaitlynlie/strokeprediction",
    },
    ttt: {
      category: "projects",
      title: "Talk to Text",
      description: "A website that allows students to upload their lecture recordings for automatic summarization and key point extraction with customizable features.",
      tech: [
      { name: "Python", icon: python },
      { name: "Flask", icon: flask },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Digital Ocean", icon: digitalocean },
      ],
      image: tttmock,
      live: "https://speechtotext-kappa.vercel.app",
      link: "https://github.com/kaitlynlie/talktotext",
    },
    cafestop: {
      category: "fun",
      title: "CafeStop",
      description: "A virtual café for focus and productivity, with a Pomodoro timer and ambient café sounds.",
      tech: [
      { name: "React", icon: react },
      { name: "TypeScript", icon: typescript },
      ],
      image: cafestopmock,
      live: "https://cafestop-nine.vercel.app",
      link: "https://github.com/kaitlynlie/cafestop",
    },
    aoxa: { 
      category: "freelance",
      title: "Aoxa",
      description: "Frontend mockup for a website to book local experts for home, office, or personal needs.",
      // tech: [
      // { name: "React", icon: react },
      // { name: "TypeScript", icon: typescript },
      // ],
      image: aoxamockup,
      live: "https://aoxa.webflow.io",
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
              <a>Back</a>
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
            <p>
              Projects
              {currentView.type !== "home" && (
                <span> / {projectsData[currentView.id].title}</span>
              )}
            </p>
          </div>
          <div className={clsx(styles.rightaddress)}>
            <img src={go} alt="go" />
          </div>
        </div>
        <button onClick={() => window.open('https://github.com/kaitlynlie/', '_blank', 'noopener noreferrer')}>
          <img src={forward} alt="forward" />
        </button>
        <span>Github</span>
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
                <a onClick={() => window.open('https://github.com/kaitlynlie/', '_blank', 'noopener noreferrer')}>Github</a>
              </div>
            </div>

          </div>
        </div>

        <div className={clsx(styles.details)}>
        {currentView.type === "home" && (
          <div className={styles.websites}>

            <div className={styles.section}>
            <h2>Projects</h2>
              <div className={styles.line} />

              <div className={styles.items}>
                <div
                  className={styles.item}
                  onClick={() => navigateTo({ type: "roomu", id: "roomu" })}
                >
                  <img src={roomu} alt="RoomU" />
                  <p>RoomU</p>
                </div>

                <div
                  className={styles.item}
                  onClick={() => navigateTo({ type: "pantry", id: "pantry" })}
                >
                  <img src={pantry} alt="Pantry" />
                  <p>Pantry</p>
                </div>

                <div
                  className={styles.item}
                  onClick={() => navigateTo({ type: "stroke", id: "stroke" })}
                >
                  <img src={stroke} alt="Stroke" />
                  <p>Stroke Prediction</p>
                </div>

                <div
                  className={styles.item}
                  onClick={() => navigateTo({ type: "ttt", id: "ttt" })}
                >
                  <img src={ttt} alt="Stroke" />
                  <p>Talk to Text</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Freelance Mockups</h2>
              <div className={styles.line} />
              <div className={styles.items}>
                <div
                  className={styles.item}
                  onClick={() => navigateTo({ type: "aoxa", id: "aoxa" })}
                >
                  <img src={aoxa} alt="Aoxa" />
                  <p>Aoxa</p>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h2>Just for Fun</h2>
              <div className={styles.line} />
              <div className={styles.items}>
                <div
                  className={styles.item}
                  onClick={() => navigateTo({ type: "cafestop", id: "cafestop" })}
                >
                  <img src={cafestop} alt="CafeStop" />
                  <p>CafeStop</p>
                </div>
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

            <div className={styles.projectImage}>
              <img src={projectsData[currentView.id].image} alt={projectsData[currentView.id].title} />
            </div>

            <div className={styles.projectLinks}>
              <a href={projectsData[currentView.id].link} target="_blank">Live Site</a>
            </div>
          </div>
        )}

        {currentView.type === "pantry" && (
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

            {/* <div className={styles.projectImage}>
              <img src={projectsData[currentView.id].image} alt={projectsData[currentView.id].title} />
            </div> */}

            <div className={styles.projectLinks}>
              <a href={projectsData[currentView.id].link} target="_blank">Live Site</a>
            </div>
          </div>
        )}

        {currentView.type === "stroke" && (
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
              <a href={projectsData[currentView.id].link} target="_blank">Github Link</a>
            </div>
          </div>
        )}

        {currentView.type === "ttt" && (
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

            <div className={styles.projectImage}>
              <img src={projectsData[currentView.id].image} alt={projectsData[currentView.id].title} />
            </div>

            <div className={styles.projectLinks}>
              <a href={projectsData[currentView.id].live} target="_blank">Live Site</a>
              <a href={projectsData[currentView.id].link} target="_blank">Github Link</a>
            </div>
          </div>
        )}

        {currentView.type === "cafestop" && (
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

            <div className={styles.projectImage}>
              <img src={projectsData[currentView.id].image} alt={projectsData[currentView.id].title} />
            </div>

            <div className={styles.projectLinks}>
              <a href={projectsData[currentView.id].live} target="_blank">Live Site</a>
              <a href={projectsData[currentView.id].link} target="_blank">Github Link</a>
            </div>
          </div>
        )}

        {currentView.type === "aoxa" && (
          <div className={styles.project}>
            <h2>{projectsData[currentView.id].title}</h2>
            <p>{projectsData[currentView.id].description}</p>

            {/* <div className={styles.groupbox}>
              <ul>
                {projectsData[currentView.id].tech.map((tech) => (
                  <li key={tech.name} className={styles.techItem}>
                    <img src={tech.icon} alt={tech.name} />
                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className={styles.projectImage}>
              <img src={projectsData[currentView.id].image} alt={projectsData[currentView.id].title} />
            </div>

            <div className={styles.projectLinks}>
              <a href={projectsData[currentView.id].live} target="_blank">Live Site</a>
              {/* <a href={projectsData[currentView.id].link} target="_blank">Github Link</a> */}
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