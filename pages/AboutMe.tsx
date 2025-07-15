import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.scss';
import clsx from 'clsx';
import { hero } from '../assets';

const AboutMe = () => {
  return (
    <section id="about" className={clsx(styles.aboutme)}>
      <div className={clsx(styles.info)}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          #ABOUT
        </motion.h2>

        <div className={clsx(styles.details)}>
          <motion.div
            className={clsx(styles.left)}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              My love for tech started early, when I created goofy little storytelling games as a kid using Donacode — a Scratch-like language that made me feel like a 10-year-old game dev prodigy.
              Unfortunately, none of my epic adventures ever went viral, but the joy of building never left me.
              <br /><br />
              Fast forward to today, I've had the privilege of working at&nbsp;
              <a href="https://aggieworks.org" target="_blank" rel="noopener noreferrer">
                a student-led organization building real products
              </a>
              &nbsp;and&nbsp;
              <a href="https://order.thepantry.ucdavis.edu" target="_blank" rel="noopener noreferrer">
                a food pantry website ensuring no student is hungry
              </a>
              .
              <br /><br />
              Currently, I work as a Technical Specialist at Foxit Software, where I provide support and solutions to enhance user experience. I'm grateful for the chance to learn, innovate, and build for real users.
              <br /><br />
              Outside of work, you'll usually find me with a book, binge-watching C-dramas, or going on walks, but I'm still holding out hope for that sleeper hit.
            </p>
          </motion.div>

          <motion.div
            className={clsx(styles.right)}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={clsx(styles.image)}>
              <img src={hero} alt="Portrait of me" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
