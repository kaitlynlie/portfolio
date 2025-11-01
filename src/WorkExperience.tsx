import React, { useState, useRef, useEffect } from "react";
import styles from "./WorkExperience.module.scss";
import clsx from "clsx";
import { back, book, briefcase, folderopen, forward, go, search, startmenu, up } from "./assets";
import { jobs } from "./work";
interface WorkExperienceProps {
  onClose: () => void;
}

const WorkExperience = ({ onClose }: WorkExperienceProps) => {
  const [position, setPosition] = useState({ x: 200, y: 100 }); // initial position
  const [size, setSize] = useState({ width: 600, height: 400 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const TASKBAR_HEIGHT = 2 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 2rem in px

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

  // clamp to viewport, leaving space for taskbar
  newX = Math.max(0, Math.min(newX, viewportWidth - windowWidth));
  newY = Math.max(0, Math.min(newY, viewportHeight - windowHeight - TASKBAR_HEIGHT));

  setPosition({ x: newX, y: newY });
};

  const handleMouseUp = () => {
    setDragging(false);
  };

const [resizing, setResizing] = useState(false);
const resizeDir = useRef<"right" | "bottom" | "corner" | null>(null);
const resizeStart = useRef({ x: 0, y: 0, width: 0, height: 0 });

const handleResizeMouseDown = (e: React.MouseEvent, direction: "right" | "bottom" | "corner") => {
  e.stopPropagation();
  setResizing(true);
  resizeDir.current = direction;
  resizeStart.current = {
    x: e.clientX,
    y: e.clientY,
    width: size.width,
    height: size.height,
  };
};

const handleResizeMouseMove = (e: MouseEvent) => {
  if (!resizing || !resizeDir.current) return;

  const dx = e.clientX - resizeStart.current.x;
  const dy = e.clientY - resizeStart.current.y;

  let newWidth = resizeStart.current.width;
  let newHeight = resizeStart.current.height;

  if (resizeDir.current === "right" || resizeDir.current === "corner")
    newWidth = Math.max(300, resizeStart.current.width + dx); // min width
  if (resizeDir.current === "bottom" || resizeDir.current === "corner") {
  newHeight = Math.max(200, resizeStart.current.height + dy); // min height
  // prevent overlapping taskbar
  newHeight = Math.min(newHeight, window.innerHeight - position.y - TASKBAR_HEIGHT);
}


  setSize({ width: newWidth, height: newHeight });
};

const handleResizeMouseUp = () => {
  setResizing(false);
  resizeDir.current = null;
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

  useEffect(() => {
  if (resizing) {
    window.addEventListener("mousemove", handleResizeMouseMove);
    window.addEventListener("mouseup", handleResizeMouseUp);
  } else {
    window.removeEventListener("mousemove", handleResizeMouseMove);
    window.removeEventListener("mouseup", handleResizeMouseUp);
  }

  return () => {
    window.removeEventListener("mousemove", handleResizeMouseMove);
    window.removeEventListener("mouseup", handleResizeMouseUp);
  };
}, [resizing]);


  const windowRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={windowRef}
      className={clsx(styles.mail)}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        cursor: dragging ? "grabbing" : "default",
      }}
    >

      <div
        className={clsx(styles.header)}
        onMouseDown={handleMouseDown}
        style={{ cursor: "grab" }}
      >
        <div className={clsx(styles.leftheader)}>
          <img src={briefcase} alt="briefcase" />
          <p>Work Experience</p>
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
      </div>

      <div className={clsx(styles.directions)}>
          <div className={clsx(styles.leftdirections)}>
            <div className={clsx(styles.back)}>
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

      <div className={clsx(styles.address)}>
        <p>Address</p>
        <div className={clsx(styles.addressbar)}>
          <div className={clsx(styles.leftaddress)}>
            <img src={book} alt="book" />
            <p> Work Experience</p>
          </div>
          <div className={clsx(styles.rightaddress)}>
            <img src={go} alt="go" />
          </div>
        </div>
        <button onClick={() => window.open('https://drive.google.com/file/d/1vnNty9lyedqHmXPbxmWK7rMWGaGfx00V/view?usp=sharing', '_blank', 'noopener noreferrer')}>
          <img src={forward} alt="forward" />
        </button>
        <span>Go to Resume</span>
      </div>

      <div className={clsx(styles.text)}>
        <div className={clsx(styles.experience)}>
        {jobs.map((job) => (
          <div key={job.id} className={clsx(styles.job)}>
            <div className={clsx(styles.left)}>
              <p>{job.position}<br /></p>
              <p>{job.time} <br /></p>
            </div>

            <div className={clsx(styles.right)}>
              <p>{job.title}<br /></p>
              <p>{job.location}<br /></p>
            </div>

            {job.description.map((line, index) => (
              <p key={index}><br />{line} <br /></p>
            ))}

          </div>
        ))}
        </div>
      </div>

    {/* right edge */}
    <div
      className={clsx(styles.resizeHandle, styles.right)}
      onMouseDown={(e) => handleResizeMouseDown(e, "right")}
    />

    {/* bottom edge */}
    <div
      className={clsx(styles.resizeHandle, styles.bottom)}
      onMouseDown={(e) => handleResizeMouseDown(e, "bottom")}
    />

    {/* bottom right */}
    <div
      className={clsx(styles.resizeHandle, styles.corner)}
      onMouseDown={(e) => handleResizeMouseDown(e, "corner")}
    />
  </div>
  );
};

export default WorkExperience;