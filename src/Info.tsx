import React, { useState, useRef, useEffect } from "react";
import styles from "./Info.module.scss";
import clsx from "clsx";
import { info } from "./assets";

interface InfoProps {
  onClose: () => void;
}

const Info = ({ onClose }: InfoProps) => {
const [position, setPosition] = useState({ x: 200, y: 100 }); // initial position
  const [size, setSize] = useState({ width: 300, height: 300 });
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
          <img src={info} alt="info" />
          <p>info.txt</p>
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
          <button>Help</button>
        </div>

        <div className={clsx(styles.rightfunctions)}></div>
      </div>

        <div className={clsx(styles.text)}>
            <p>Inspired by Windows XP</p>
            <p>Built with React, TypeScript, SCSS</p>
            <p>Icons from @marchmountain on Deviant Art</p>
            <p>Background audio from Emily is Away</p>
            <br />
            <p>This is still a work in progress! If you find any bugs or have any suggestions, please let me know :)</p>
            <br />
            <p>Last updated: Oct 2025</p>
            <p>© 2025 Kaitlyn Li</p>
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

export default Info;
