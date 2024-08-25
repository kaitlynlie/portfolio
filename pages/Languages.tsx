import React from 'react'
import clsx from 'clsx'
import styles from './Languages.module.scss'
import { rma, github, roomu, live, box, dots, stroke, recipedia, book, carwash, galaxia, leukemia, ttt } from '../assets'

const Languages = () => {
  return (
    <section className={clsx(styles.portfolio)} id='projects'>
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.header)}>
                <h2>#technical skills</h2>
            </div>
            <div className={clsx(styles.line)} />
            <div className={clsx(styles.content)}>
            <div className={clsx(styles.group)}>
                <h3>Languages</h3>
                <ul>
                    <li>C/C++</li>
                    <li>Python</li>
                    <li>Javascript/Typescript</li>
                    <li>HTML/CSS</li>
                    <li>Java</li>
                    <li>C#</li>
                    <li>Go</li>
                    <li>SQL</li>
                </ul>
            </div>

            <div className={clsx(styles.group)}>
                <h3>Databases/Cloud</h3>
                <ul>
                    <li>Supabase</li>
                    <li>MongoDB</li>
                    <li>Digital Ocean</li>
                    <li>AWS</li>
                </ul>
            </div>

            <div className={clsx(styles.group)}>
                <h3>Languages</h3>
                <ul>
                    <li>Git</li>
                    <li>Jenkins</li>
                    <li>Docker</li>
                    <li>Linux</li>
                    <li>MATLAB</li>
                </ul>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Languages