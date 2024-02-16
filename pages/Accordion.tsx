import React from 'react';
import clsx from 'clsx';
import styles from './Work.module.scss';

const Accordion = ({ title, description, isActive, onClick, position, time }) => {
  return (
    <div className={styles.accorditem}>
      <div
        className={clsx(styles.title, { [styles.active]: isActive })}
        onClick={onClick}
      >
        {title}
      </div>
      {isActive && (
        <div className={styles.activeArea}>
          <div className={styles.position}>{position}</div>
          <div className={styles.time}>{time}</div>
          <div className={styles.description}>
            <ul>
              {description.map((bulletPoint, index) => (
                <li key={index}>{bulletPoint}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;