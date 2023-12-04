import React from 'react'
import clsx from 'clsx'
import styles from './Work.module.scss'

const Work = () => {
  return (
    <section className={clsx(styles.work)} id='work'>
        <h2>WORK EXPERIENCE</h2>
        <ul>
            <li>
                <div className={clsx(styles.right)}>
                    <h4>OCT 2023 - PRESENT</h4>
                    <h3>Software Engineer</h3>
                    <h3 style={{fontStyle: 'italic'}}>Aggieworks</h3>
                    <p>• Collaborated with a team of 20 developers, designers, and product managers in an AGILE work environment to build applications for nearly 40,000 students using React, TypeScript, and Supabase</p>
                </div>
            </li>
            <div className={clsx(styles.dot)} />
            <li>
                <div className={clsx(styles.left)}>
                    <h4>NOV 2023 - PRESENT</h4>
                    <h3>Web Developer</h3>
                    <h3 style={{fontStyle: 'italic'}}>The Aggie Transcript</h3>
                    <p>• Developed and launched an engaging website for the Undergraduate Life Sciences Journal, providing a platform for students to author and share personal narratives</p>
                </div>
            </li>
            <div className={clsx(styles.dot)} />
            <li>
                <div className={clsx(styles.right)}>
                    <h4>JULY 2023 - OCT 2023</h4>
                    <h3>Software Engineer Intern</h3>
                    <h3 style={{fontStyle: 'italic'}}>Stealth Startup</h3>
                    <p>• Developed interactive landing/product pages to translate Figma designs into functional web elements, resulting in a 70% increase in website traffic</p>
                    <p>• Implemented a system-wide change for our application, replacing numerical IDs with actual usernames, enhancing user recognition, and facilitating smoother interactions within the platform</p>
                    <p>• Produced training videos for internal use, enhancing team knowledge sharing and onboarding processes</p>
                    <p>• Collaborated effectively with design and product teams to develop websites aligned with project goals</p>
                </div>
            </li>
            <div className={clsx(styles.dot)} />
            <li>
                <div className={clsx(styles.left)}>
                    <h4>JULY 2021 - SEP 2022</h4>
                    <h3>Machine Learning Intern</h3>
                    <h3 style={{fontStyle: 'italic'}}>Nonprofit Company</h3>
                    <p>• Applied pre-trained models such as VGG16 and ResNet50 to predict and fine-tune images with facial features</p>
                    <p>• Labeled data and trained CNN architecture for classifying images</p>
                    <p>• Coordinated with other members on group projects weekly, presenting ideas to managers</p>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default Work