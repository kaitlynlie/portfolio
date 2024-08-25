import React from 'react'
import styles from './About.module.scss'
import clsx from 'clsx'
import SmallHero from './SmallHero'

const AboutMe = () => {
  return (
    <section className={clsx(styles.aboutme)} id='about'>
      <SmallHero />
        <div className={clsx(styles.info)}>
            <h2>#about</h2>
            <div className={clsx(styles.line)} />
            <p>
              My interest started out with creating silly storytelling games as a child, using a language called Donacode, which is similar to Scratch.
              <br/><br/> Fast forward to today, I've had the privilege of working at a&nbsp;
              <a href="https://aggieworks.org" target="_blank" rel="noopener noreferrer">student-led organization that builds products for students</a>
              &nbsp;and&nbsp;
              <a href="https://order.thepantry.ucdavis.edu" target="_blank" rel="noopener noreferrer">a food pantry website to ensure no student is hungry</a>
              . I am currently interning as a Software Engineer Intern at Roche, and I'm grateful for this opportunity to grow and help more people outside of my college.
            </p>
        </div>
    </section>
  )
}

export default AboutMe