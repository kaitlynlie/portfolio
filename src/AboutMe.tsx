import { useState } from "react";
import styles from "./AboutMe.module.scss";
import clsx from "clsx";
import { aboutme, github, linkedin, systeminfo } from "./assets";
import { useWindowControls } from "./windows";
interface AboutMeProps {
  onClose?: () => void;
}

const skillData = {
  Languages: ["JavaScript", "C++", "Python", "Java", "TypeScript", "SQL", "Go", "HTML", "CSS"],
  "Frameworks / Technologies": [
    "React", "Next.js", "Node.js", "Express.js", "Redux", "Flask", "Django",
    "Drupal", "Shopify", "WordPress", "Tailwind", "SCSS/SASS"
  ],
  "Databases / Cloud": ["AWS", "PostgreSQL", "MongoDB", "SQLite", "Supabase", "Redis"],
  Tools: ["Docker", "Figma", "Git", "Jenkins", "Jira", "Linux"],
  Certifications: ["Azure Fundamentals"],
};

  export default function AboutMe({ onClose }: AboutMeProps) {
  const {
    position,
    size,
    windowRef,
    startDrag,
    startResize,
  } = useWindowControls({
    initialPosition: { x: 180, y: 60 },
    initialSize: { width: 300, height: 300 },
    minWidth: 200,
    minHeight: 150,
  });

  const [activeTab, setActiveTab] = useState<"general" | "profile" | "skills" | "remote" >("general");
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<keyof typeof skillData>("Languages");

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
          <img src={aboutme} alt="about me" />
          <p>About Me</p>
        </div>

        <div className={clsx(styles.rightheader)}>
          <button onClick={onClose}>
            <div className={clsx(styles.left)} />
            <div className={clsx(styles.right)} />
          </button>
        </div>
      </div>

      <div className={clsx(styles.functions)}>
        <div className={clsx(styles.topfunctions)}>
          <div className={clsx(styles.button)}>System Restore</div>
          <div className={clsx(styles.button)}>Automatic Updates</div>
          <div className={clsx(styles.button)}>Support</div>
        </div>

        <div className={clsx(styles.bottomfunctions)}>
          <button
            className={clsx(activeTab === "general" && styles.activetab)}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>
          <button
            className={clsx(activeTab === "profile" && styles.activetab)}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
        <button className={clsx(activeTab === "skills" && styles.activetab)} 
          onClick={() => setActiveTab("skills")}>
          Skills
        </button>
          <button
            className={clsx(activeTab === "remote" && styles.activetab)}
            onClick={() => setActiveTab("remote")}
          >
            Remote
          </button>
        </div>

        <div className={clsx(styles.tabcontent)}>
          {activeTab === "general" && (
            <div className={clsx(styles.tabpane)}>
              <img src={systeminfo} alt="profile" />
              <div className={clsx(styles.info)}>
                <p>System: </p>
                <ul>
                  <li>Kaitlyn OS v10.26</li>
                  <li>Professional</li>
                  <li>Version 2026</li>
                  <li>Service Pack</li>
                </ul>

                <p>Registered to: </p>
                <ul>
                  <li>Kaitlyn Li</li>
                  <li>Support/Web</li>
                  <li>55274-640-0000356-26XXX</li>
                </ul>
                
                <p>Computer: </p>
                <ul>
                  <li>Brain: 2 cells</li>
                  <li>RAM: 10 ideas</li>
                  <li>GPU: Imagination v6</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className={clsx(styles.tab)}>
              <p>
                Hi, I’m Kaitlyn, and one of my biggest passions is helping create products that serve communities
      and bridge the gap between technical and non-technical audiences.
              </p>
              <br />
              <p>
                My love for tech started early, when I created goofy little storytelling games as a kid
                using Donacode, which is a Scratch-like language that made me feel like a 10-year-old game dev prodigy.
                Unfortunately, none of my epic adventures ever went viral, but the joy of building never left me.
              </p>
              <br />
              <p>
                Currently, I work as a Technical Support Specialist at <strong>Webflow</strong>, where I provide support and solutions
                to enhance user experience on the platform. I’m grateful for the chance to learn, innovate, and build for real users.
              </p>
              <br />
              <p>
                Outside of work, you’ll usually find me with a book, binge-watching C-dramas, or going on walks —
                but I’m still holding out hope for that sleeper hit.
              </p>
            </div>
          )}


        {activeTab === "skills" && (
          <div className={clsx(styles.skills)}>
            <div className={clsx(styles.sidebar)}>
              <ul>
                {Object.keys(skillData).map((category) => (
                  <li
                    key={category}
                    className={clsx({ [styles.active]: selectedSkillCategory === category })}
                    onClick={() => setSelectedSkillCategory(category as keyof typeof skillData)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className={clsx(styles.details)}>
              <table>
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {skillData[selectedSkillCategory].map((skill) => (
                    <tr key={skill}>
                      <td>{skill}</td>
                      <td>✓</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

          {activeTab === "remote" && (
            <div className={clsx(styles.tab)}>

              <p>Current connection status: Online (ish)</p>

              <div className={clsx(styles.groupbox)}>
                <span className={clsx(styles.groupboxLabel)}>LinkedIn</span>

                <div className={clsx(styles.socialinfo)}>
                  <img src={linkedin} alt="LinkedIn" />
                  <p>This is my LinkedIn profile, let's connect!</p>
                </div>

                <div className={clsx(styles.link)}>
                  <a href="https://www.linkedin.com/in/kaitlyn-li-0922/" target="_blank">
                      LinkedIn
                  </a>
                </div>
              </div>

              <div className={clsx(styles.groupbox)}>
                <span className={clsx(styles.groupboxLabel)}>GitHub</span>
                <div className={clsx(styles.socialinfo)}>
                  <img src={github} alt="GitHub" />
                  <p>This is where I store my projects.</p>
                </div>

                <div className={clsx(styles.link)}>
                  <a href="https://www.github.com/kaitlynlie" target="_blank">
                      GitHub
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={clsx(styles.bottombuttons)}>
          <button onClick={onClose}>OK</button>
          <button onClick={onClose}>Cancel</button>
          <button>Apply</button>
        </div>
      </div>

    <div
      className={clsx(styles.resizeHandle, styles.right)}
      onMouseDown={(e) => startResize(e, "right")}
    />

    {/* bottom edge */}
    <div
      className={clsx(styles.resizeHandle, styles.bottom)}
      onMouseDown={(e) => startResize(e, "bottom")}
    />

    {/* bottom right */}
    <div
      className={clsx(styles.resizeHandle, styles.corner)}
      onMouseDown={(e) => startResize(e, "corner")}
    />
    </div>
  );
};
