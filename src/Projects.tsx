import React, { useState, useRef, useEffect } from "react";
import styles from "./Project.module.scss";
import clsx from "clsx";
import { projects, skills } from "./assets";

interface ProjectsProps {
  onClose: () => void;
}

const Projects = ({ onClose }: ProjectsProps) => {
  const [position, setPosition] = useState({ x: 200, y: 100 }); // initial position
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
  if (!dragging) return;

  // viewport size
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // window element size
  const element = windowRef.current;
  if (!element) return;

  const windowWidth = element.offsetWidth;
  const windowHeight = element.offsetHeight;

  // new position
  let newX = e.clientX - offset.current.x;
  let newY = e.clientY - offset.current.y;

  // clamp to viewport
  newX = Math.max(0, Math.min(newX, viewportWidth - windowWidth));
  newY = Math.max(0, Math.min(newY, viewportHeight - windowHeight));

  setPosition({ x: newX, y: newY });
};

  const handleMouseUp = () => {
    setDragging(false);
  };

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const windowRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={windowRef}
      className={clsx(styles.mail)}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: dragging ? "grabbing" : "default",
      }}
    >
      <div
        className={clsx(styles.header)}
        onMouseDown={handleMouseDown}
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

      <div className={clsx(styles.functions)}>
        <div className={clsx(styles.leftfunctions)}>
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>Tools</button>
        </div>

        <div className={clsx(styles.rightfunctions)}></div>

        <div className={clsx(styles.form)}>
          <form>{/* Your form inputs go here */}</form>
        </div>
      </div>
    </div>
  );
};

export default Projects;
