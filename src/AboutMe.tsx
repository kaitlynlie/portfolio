import React, { useState, useRef, useEffect } from "react";
import styles from "./AboutMe.module.scss";
import clsx from "clsx";
import { aboutme, me, projects, skills } from "./assets";

interface AboutMeProps {
  onClose: () => void;
}

const AboutMe = ({ onClose }: AboutMeProps) => {
const [position, setPosition] = useState({ x: 200, y: 100 }); // initial position
  const [size, setSize] = useState({ width: 300, height: 300 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const TASKBAR_HEIGHT = 2 * parseFloat(getComputedStyle(document.documentElement).fontSize);
  const [activeTab, setActiveTab] = useState<"general" | "updates" | "remote" | "support">("general");

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
          <div className={clsx(styles.button)}>Remote</div>
        </div>

        <div className={clsx(styles.bottomfunctions)}>
          <button
            className={clsx(activeTab === "general" && styles.activetab)}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>
          <button
            className={clsx(activeTab === "updates" && styles.activetab)}
            onClick={() => setActiveTab("updates")}
          >
            Updates
          </button>
          <button
            className={clsx(activeTab === "remote" && styles.activetab)}
            onClick={() => setActiveTab("remote")}
          >
            Remote
          </button>
          <button
            className={clsx(activeTab === "support" && styles.activetab)}
            onClick={() => setActiveTab("support")}
          >
            Support
          </button>
        </div>

        <div className={clsx(styles.tabcontent)}>
          {activeTab === "general" && (
            <div className={clsx(styles.tabpane)}>
              <img src={me} alt="profile" />
              <div className={clsx(styles.info)}>
                <p>System: </p>
                <ul>
                  <li> Creativity OS v10.25</li>
                  <li>Professional</li>
                  <li>Version 2025</li>
                  <li>Service Pack</li>
                </ul>
                <p>Registered to: Kaitlyn Li </p>
              </div>
            </div>
          )}

          {activeTab === "updates" && (
            <div className={clsx(styles.tabpane)}>
              <p>Currently updating creativity modules... ✅</p>
              <p>Next scheduled update: Every cup of coffee ☕</p>
            </div>
          )}

          {activeTab === "remote" && (
            <div className={clsx(styles.tabpane)}>
              <p>Remote connections enabled.</p>
              <p>Accepting collaborations through GitHub & LinkedIn 💼</p>
            </div>
          )}

          {activeTab === "support" && (
            <div className={clsx(styles.tabpane)}>
              <p>For inquiries, bug reports, or tech support:</p>
              <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
            </div>
          )}
        </div>
      </div>

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

export default AboutMe;
