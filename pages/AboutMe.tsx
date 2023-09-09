import React from 'react'
import styles from './About.module.scss'
import clsx from 'clsx'
import { aboutme } from '../public'
import { motion } from 'framer-motion'
import { fadeIn } from '../src/utils/motion'

const AboutMe = () => {
  return (
    <section className={clsx(styles.aboutme)}>
        <motion.div
  variants={fadeIn('up', 'tween', 0.2, 1)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className={clsx(styles.image)}
>
            <img src={aboutme} />
            
        </motion.div>

        <div className={clsx(styles.info)}>
            <h2>ABOUT ME</h2>
            <p>I am currently a Computer Science student pursuing a Bachelor’s Degree with an interest in becoming a Software Engineer. I am seeking an internship to gain hands-on experience and to further develop abilities. I am also flexible, detail-oriented, and hardworking team player driven to learn quickly and focus on performance</p>
        </div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full blue__gradient bottom-140 right-20" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 right-0 white__gradient" />
    </section>
  )
}

export default AboutMe