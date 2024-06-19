import React from 'react'
import styles from './About.module.scss'
import clsx from 'clsx'
import { hero } from '../assets'
import { motion } from 'framer-motion'
import { fadeIn } from '../src/utils/motion'

const AboutMe = () => {
  return (
    <section className={clsx(styles.aboutme)} id='about'>
        <motion.div
  variants={fadeIn('up', 'tween', 0.2, 1)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className={clsx(styles.image)}
>
            <img src={hero} />
            
        </motion.div>
        <motion.div
  variants={fadeIn('up', 'tween', 0.2, 1)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className={clsx(styles.image)}
>
        <div className={clsx(styles.info)}>
            <h2>#about</h2>
            <p>
              My interest started out with creating silly storytelling games as a child, using a language called Donacode, which is similar to Scratch.
              <br/><br/> Fast forward to today, I've had the privilege of working at a student-led organization that builds products for students and a food pantry website to ensure no student is hungry. I am currently interning as a Software Engineer Intern at Roche, and I'm grateful for this opportunity to grow and help more people outside of my college.
              {/* <br/><br/> Here are a few technologies I have been working with recently: */}
              {/* <ul className={clsx(styles.list)}>
                <li>Typescript</li>
                <li>Java</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>C++</li>
                <li>Go</li>
              </ul> */}
            </p>
        </div>
        </motion.div>
    </section>
  )
}

export default AboutMe