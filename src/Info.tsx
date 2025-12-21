import styles from "./Info.module.scss";
import clsx from "clsx";
import { info } from "./assets";
import { useWindowControls } from "./windows";

interface InfoProps {
  onClose?: () => void;
}

export default function Info({ onClose }: InfoProps) {
  const {
    position,
    size,
    windowRef,
    startDrag,
    startResize,
  } = useWindowControls({
    initialPosition: { x: 120, y: 800 },
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
      <div
        className={clsx(styles.header)}
        onMouseDown={startDrag}
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
            <p>© 2025 Kaitlyn Li</p>
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
