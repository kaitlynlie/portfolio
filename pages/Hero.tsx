import React from 'react'
import styles from './Hero.module.scss'
import clsx from 'clsx'
import { linkedin, github, hero, line } from '../assets'
import { color, motion } from 'framer-motion'
import { fadeIn } from '../src/utils/motion'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className={clsx(styles.hero)} id='home'>
        <div className={clsx(styles.topinfo)}>
          <p>Hello, my name is</p>
          <h1>Kaitlyn Li 👋</h1>
          <div className={clsx(styles.wrapper)}>
              {/* <ul className={clsx(styles.dynamic)}>
                <li><span>Software Engineer</span></li>
                <li><span>Web Developer</span></li>
                <li><span>Student</span></li>
              </ul> */}
              <TypeAnimation
                sequence={[
                  'I am a Software Engineer.',
                  1000,
                  // 'I am a Full-Stack Developer.',
                  // 1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '40px', display: 'inline-block', fontWeight: '700', color: 'rgb(82, 107, 166)'}}
                repeat={Infinity}
              />
            </div>
            <p>I am interested in pursuing software development, with a passion in building human-centered and accessible products.</p>
            {/* <div className={clsx(styles.icons)}>
                <a href='https://www.linkedin.com/in/kaitlyn-li-0922/'><img src={linkedin} /></a>
                <a href='https://github.com/kaitlynlie'><img src={github} /></a>
            </div> */}
        </div>

        {/* <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={clsx(styles.image)}
        >
          <img src={hero} />
        </motion.div> */}

        <div className={clsx(styles.bottominfo)}>
            <p>Hello, I'm </p>
            <h1>Kaitlyn Li</h1>
            <p>I am interested in pursuing <span>software development,</span> with a passion in building human-centered and accessible products, based in San Francisco, California.</p>
            {/* <div className={clsx(styles.icons)}>
                <a href='https://www.linkedin.com/in/kaitlyn-li-0922/'><img src={linkedin} /></a>
                <a href='https://github.com/kaitlynlie'><img src={github} /></a>
            </div> */}
        </div>
    </section>
  )
}

export default Hero