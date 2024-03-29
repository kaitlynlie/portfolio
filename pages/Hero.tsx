import React from 'react'
import styles from './Hero.module.scss'
import clsx from 'clsx'
import { linkedin, github, hero, line } from '../assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../src/utils/motion'

const Hero = () => {
  return (
    <section className={clsx(styles.hero)} id='home'>
        <div className={clsx(styles.topinfo)}>
          <div className={clsx(styles.wrapper)}>
              <ul className={clsx(styles.dynamic)}>
                <li><span>Software Engineer</span></li>
                <li><span>Web Developer</span></li>
                <li><span>Student</span></li>
              </ul>
            </div>
            <p>Hi, I'm Kaitlyn Li, a student interested in Software Development based in San Francisco, California.</p>
            <div className={clsx(styles.icons)}>
                <a href='https://www.linkedin.com/in/kaitlyn-li-0922/'><img src={linkedin} /></a>
                <a href='https://github.com/kaitlynlie'><img src={github} /></a>
            </div>
        </div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={clsx(styles.image)}
        >
          <img src={hero} />
        </motion.div>

        <div className={clsx(styles.bottominfo)}>
            <h1>Software Engineer</h1>
            <p>Hi, I'm Kaitlyn Li, a student interested in Software Development based in San Francisco, California.</p>
            <div className={clsx(styles.icons)}>
                <a href='https://www.linkedin.com/in/kaitlyn-li-0922/'><img src={linkedin} /></a>
                <a href='https://github.com/kaitlynlie'><img src={github} /></a>
            </div>
        </div>
    </section>
  )
}

export default Hero