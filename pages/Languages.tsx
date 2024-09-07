import React from 'react'
import clsx from 'clsx'
import styles from './Languages.module.scss'
import { rma, github, roomu, live, box, dots, stroke, recipedia, book, carwash, galaxia, leukemia, ttt } from '../assets'
import { languages, technologies, cloud } from '../src/constants'

const Languages = () => {
  return (
    <section className={clsx(styles.languages)} id='projects'>
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.header)}>
                <h2>#technical skills</h2>
            </div>
            <div className={clsx(styles.line)} />
            <div className={clsx(styles.content)}>
              <div className={clsx(styles.groups)}>
              <h3>Languages:</h3>
                <div className={clsx(styles.language)}>
                {languages.map((lang, index) => (
                <button key={index} className={clsx(styles.button)}>
                  <img 
                    src={lang.icon} 
                    alt={lang.language} 
                    style={{ marginRight: '7px', marginLeft: '-5px' }} 
                  />
                  {lang.language}
                </button>
              ))}
                </div>
              </div>

              <div className={clsx(styles.groups)}>
              <h3>Technologies/Frameworks:</h3>
                <div className={clsx(styles.language)}>
                {technologies.map((lang, index) => (
                <button key={index} className={clsx(styles.button)}>
                  <img 
                    src={lang.icon} 
                    alt={lang.language} 
                    style={{ marginRight: '7px', marginLeft: '-5px' }} 
                  />
                  {lang.language}
                </button>
              ))}
                </div>
              </div>

              <div className={clsx(styles.groups)}>
              <h3>Databases/Cloud:</h3>
                <div className={clsx(styles.language)}>
                {cloud.map((lang, index) => (
                <button key={index} className={clsx(styles.button)}>
                  <img 
                    src={lang.icon} 
                    alt={lang.language} 
                    style={{ marginRight: '7px', marginLeft: '-5px' }} 
                  />
                  {lang.language}
                </button>
              ))}
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Languages