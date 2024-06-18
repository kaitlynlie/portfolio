import React from 'react'
import clsx from 'clsx'
import styles from './Work.module.scss'

const Work = () => {
  return (
    <section className={clsx(styles.work)} id='work'>
        <h2>#work</h2>
        <ul>
            <li>
                <div className={clsx(styles.left)}>
                    <h4>NOV 2023 - JUNE 2024</h4>
                    <h3>Web Developer</h3>
                    <h3 style={{fontStyle: 'italic'}}>The Aggie Transcript</h3>
                    <p>• Developed and launched an engaging website for the Undergraduate Life Sciences Journal, providing a platform for students to author and share personal narratives</p>
                    <p>• Coordinated with editors and graphic designers to facilitate the weekly publication of papers, ensuring a seamless integration of content and design elements</p>
                </div>
            </li>
            <div className={clsx(styles.dot)} />
            <li>
                <div className={clsx(styles.right)}>
                    <h4>JULY 2023 - JAN 2024</h4>
                    <h3>Software Engineer Intern</h3>
                    <h3 style={{fontStyle: 'italic'}}>Stealth Startup</h3>
                    <p>• Developed interactive landing/product pages to translate Figma designs into functional web elements, resulting in a 70% increase in website traffic</p>
                    <p>• Implemented a system-wide change for a chat application, replacing numerical IDs with actual usernames, to enhance user recognition and facilitate smoother interactions within the team of 50+ people</p>
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