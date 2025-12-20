import styles from "./Contact.module.scss";
import clsx from "clsx";
import { copy, cut, mail, mailto, paste, reply, replyall, send, sign, undo } from "./assets";
import { useForm, ValidationError } from '@formspree/react';
import { useWindowControls } from "./windows";
interface ContactProps {
  onClose?: () => void;
}

const Contact = ({ onClose }: ContactProps) => {
  const [state, handleSubmit] = useForm("xgeggjpl");
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
        <div className={clsx(styles.header)} onMouseDown={startDrag} style={{ cursor: "grab" }}>
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

export default Contact;
