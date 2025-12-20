import React, { useState, useRef, useEffect } from "react";
import styles from "./Skills.module.scss";
import clsx from "clsx";
import { skills } from "./assets";
import { useWindowControls } from "./windows";
interface SkillsProps {
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

export default function Skills({ onClose }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof skillData>("Languages");
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
      {/* Header */}
      <div
        className={clsx(styles.header)}
        onMouseDown={startDrag}
        style={{ cursor: "grab" }}
      >
        <div className={clsx(styles.leftheader)}>
          <img src={skills} alt="skills" />
          <p>Skills</p>
        </div>
        <div className={clsx(styles.rightheader)}>
          <button onClick={onClose}>
            <div className={clsx(styles.left)} />
            <div className={clsx(styles.right)} />
          </button>
        </div>
      </div>

      {/* Top menu bar */}
      <div className={clsx(styles.functions)}>
        <div className={clsx(styles.leftfunctions)}>
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>Tools</button>
        </div>
      </div>

      {/* XP System Info layout */}
      <div className={clsx(styles.xpBody)}>
        {/* Left sidebar */}
        <div className={clsx(styles.sidebar)}>
          <ul>
            {Object.keys(skillData).map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category as keyof typeof skillData)}
                className={clsx({ [styles.active]: selectedCategory === category })}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Right details panel */}
        <div className={clsx(styles.details)}>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {skillData[selectedCategory].map((skill) => (
                <tr key={skill}>
                  <td>{skill}</td>
                  <td>✔️</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    {/* right edge */}
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
