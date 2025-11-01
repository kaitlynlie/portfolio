import React, { useState, useRef, useEffect } from "react";
import styles from "./Contact.module.scss";
import clsx from "clsx";
import { copy, cut, mail, mailto, paste, reply, replyall, send, sign, undo } from "./assets";
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps {
  onClose: () => void;
}

const Contact = ({ onClose }: ContactProps) => {
  const [position, setPosition] = useState({ x: 200, y: 100 }); // initial position
  const [size, setSize] = useState({ width: 700, height: 500 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const TASKBAR_HEIGHT = 2 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 2rem in px
  
  const [state, handleSubmit] = useForm("xgeggjpl");

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
        <div className={clsx(styles.header)} onMouseDown={handleMouseDown} style={{ cursor: "grab" }}>
          <div className={clsx(styles.leftheader)}>
            <img src={mail} alt="mail" />
            <p>Contact Me</p>
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
          <button>Insert</button>
          <button>Format</button>
          <button>Tools</button>
          <button>Message</button>
          <button>Help</button>
        </div>

        <div className={clsx(styles.rightfunctions)}></div>
      </div>

      <div className={clsx(styles.form)}>
          <form onSubmit={handleSubmit}>
          <div className={clsx(styles.directions)}>
          <div className={clsx(styles.leftdirections)}>
            <button type="submit" className={clsx(styles.send)} disabled={state.submitting}>
              <img src={send} alt="send" />
              <p>Send</p>
            </button>
          </div>

          <div className={clsx(styles.line)} />

          <div className={clsx(styles.centerdirections)}>
            <div className={clsx(styles.cut)}>
              <img src={cut} alt="cut" />
              <p>Cut</p>
            </div>
            <div className={clsx(styles.copy)}>
              <img src={copy} alt="copy" />
              <p>Copy</p>
            </div>
            <div className={clsx(styles.paste)}>
              <img src={paste} alt="paste" />
              <p>Paste</p>
            </div>
            <div className={clsx(styles.undo)}>
              <img src={undo} alt="undo" />
              <p>Undo</p>
            </div>
          </div>

          <div className={clsx(styles.line)} />

          <div className={clsx(styles.rightdirections)}>
             <div className={clsx(styles.reply)}>
              <img src={reply} alt="reply" />
              <p>Reply</p>
            </div>
             <div className={clsx(styles.replyall)}>
              <img src={replyall} alt="reply all" />
              <p>Reply All</p>
            </div>
          </div>

          <div className={clsx(styles.line)} />

          <div className={clsx(styles.rightdirections)}>
             <div className={clsx(styles.sign)}>
              <img src={sign} alt="sign" />
              <p>Sign</p>
            </div>
          </div>
          </div>

        <div className={clsx(styles.address)}>
          <label htmlFor="to">
            <div className={clsx(styles.toaddress)}>
              <div className={clsx(styles.to)}>
                <img src={mailto} alt="to" />
                <p>To:</p>
              </div>

              <input type="text" placeholder="kaitlynli0903@gmail.com" readOnly />
            </div>
          </label>

          <label htmlFor="from">
            <div className={clsx(styles.toaddress)}>
              <div className={clsx(styles.to)}>
                <img src={mailto} alt="to" />
                <p>From:</p>
              </div>

              <input type="email" name="from" placeholder="Your email here" className={clsx(styles.from)} required/>
              <ValidationError prefix="Email" field="from" errors={state.errors} />
            </div>
          </label>

          <label htmlFor="subject">
            <div className={clsx(styles.toaddress)}>
              <div className={clsx(styles.to)}>
                <p>Subject:</p>
              </div>

              <input type="text" name="subject" onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // stop form submission
    }
  }}/>
            </div>
          </label>
        </div>

<div className={clsx(styles.message)}>
  <div className={clsx(styles.messagecontent)}>
    {state.succeeded ? (
      <span>Thank you! Your message has been sent.</span>
    ) : (
      <>
        <textarea
          name="message"
          className={clsx(styles.text)}
          placeholder="Type your message here..."
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <p>If you'd like to talk about a project, or just have a chat, leave me a message and I'll get back to you as soon as possible!</p>
      </>
    )}
  </div>
</div>


        </form>
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

export default Contact;
