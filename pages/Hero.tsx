import React from 'react'
import styles from './Hero.module.scss'
import clsx from 'clsx'
import { linkedin, github, hero, me } from '../public'

const Hero = () => {
  return (
    <section className={clsx(styles.hero)}>
        <div className={clsx(styles.info)}>
            <h1>Software Engineer</h1>
            <p>Hi, I'm Kaitlyn Li, a student interested in Software Development based in San Francisco, California.</p>
            <div className={clsx(styles.icons)}>
                <img src={linkedin} />
                <img src={github} />
            </div>
        </div>

        <div className={clsx(styles.image)}>
            <img src={hero} />
        </div>
    </section>
  )
}

export default Hero