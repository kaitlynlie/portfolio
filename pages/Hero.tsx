import React from 'react'
import styles from './Hero.module.scss'
import clsx from 'clsx'
import { locationLight, look, gradLight, goodreadsLight } from '../assets'
import { color, motion } from 'framer-motion'
import { fadeIn } from '../src/utils/motion'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className={clsx(styles.hero)} id='home'>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.topinfo)}>
          <p className={clsx(styles.first)}>HI, MY NAME IS</p>
          <h1>Kaitlyn Li</h1>
          <div className={clsx(styles.wrapper)}>
              <TypeAnimation
                sequence={[
                  'Software Engineer.',
                  2000,
                  'Full-Stack Developer.',
                  2000,
                  'Web Developer.',
                  2000,
                  'Support Engineer.',
                  2000,
                ]}
                wrapper="span"
                speed={20}
                className={clsx(styles.infinity)}
                repeat={Infinity}
              />
          </div>

          <p className={clsx(styles.intro)}>One of my biggest passions is to help create products to help communities of people and bridge the gap between technical and non-technical audiences.</p>
        </div>

          <div className={clsx(styles.bottom)}>
            <div className={clsx(styles.info)}>
                <a className={clsx(styles.button)}>
                  <img src={locationLight} />
                  <p style={{ fontFamily: "Fira"}}>San Francisco, CA</p>
                </a>

                <a className={clsx(styles.button)}>
                  <img src={gradLight} />
                  <p style={{ fontFamily: "Fira"}}>UC Davis</p>
                </a>

                {/* <a className={clsx(styles.button)}>
                  <img src={look} />
                  <p>New Grad roles</p>
                </a> */}
            </div>
            
            {/* <div className={clsx(styles.icons)}>
                <a href='https://www.linkedin.com/in/kaitlyn-li-0922/' target="_blank" rel="noopener noreferrer"><img src={linkedInLight} /></a>
                <a href='https://github.com/kaitlynlie' target="_blank" rel="noopener noreferrer"><img src={githubLight} /></a>
                <a href='https://www.goodreads.com/user/show/61339920-kait' target="_blank" rel="noopener noreferrer"><img src={goodreadsLight} /></a>
                <a href='https://drive.google.com/file/d/1hh-GceMaPYqaov4nWprO-cpyuDpA6Rns/view?usp=sharing' target="_blank" rel="noopener noreferrer"><img src={resume} /></a>
            </div> */}
            
          </div>
      </div>
    </section>
  )
}

export default Hero