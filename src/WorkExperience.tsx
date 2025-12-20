import styles from "./WorkExperience.module.scss";
import clsx from "clsx";
import { back, book, briefcase, folderopen, forward, go, search, startmenu, up } from "./assets";
import { jobs } from "./work";
import { useWindowControls } from "./windows";

interface WorkExperienceProps {
  onClose?: () => void;
}

export default function WorkExperience({ onClose }: WorkExperienceProps) {
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

      <div
        className={clsx(styles.header)}
        onMouseDown={startDrag}
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