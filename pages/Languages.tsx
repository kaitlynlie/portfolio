import React from 'react'
import clsx from 'clsx'
import styles from './Languages.module.scss'
import { languages, technologies, cloud, tools, certs } from '../src/constants'
import { motion } from 'framer-motion';

const Languages = () => {
  return (
    <section className={clsx(styles.languages)} id='languages'>
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.header)}>
                <h2>#TECHNICAL SKILLS</h2>
            </div>

            <div className={clsx(styles.content)}>
              <div className={clsx(styles.groups)}>
              <motion.h3
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3 }}
>
  Languages:
</motion.h3>
                <div className={clsx(styles.language)}>
                {languages.map((lang, index) => (
                  <motion.button
                    key={index}
                    className={clsx(styles.button)}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                  <img 
                    src={lang.icon} 
                    alt={lang.language} 
                    style={{ marginRight: '7px', marginLeft: '-5px' }} 
                  />
                  {lang.language}
                </motion.button>
              ))}

                </div>
              </div>

              <div className={clsx(styles.groups)}>
              <motion.h3
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3 }}
>
  Technologies/Frameworks:
</motion.h3>
                <div className={clsx(styles.language)}>
                {technologies.map((lang, index) => (
  <motion.button
    key={index}
    className={clsx(styles.button)}
    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    whileHover={{
      scale: 1.05,
      backgroundColor: 'rgba(255,255,255,0.05)',
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.98 }}
  >
    <img 
      src={lang.icon} 
      alt={lang.language} 
      style={{ marginRight: '7px', marginLeft: '-5px' }} 
    />
    {lang.language}
  </motion.button>
))}

                </div>
              </div>

              <div className={clsx(styles.groups)}>
              <motion.h3
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3 }}
>
  Databases/Cloud:
</motion.h3>
                <div className={clsx(styles.language)}>
                {cloud.map((lang, index) => (
  <motion.button
    key={index}
    className={clsx(styles.button)}
    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    whileHover={{
      scale: 1.05,
      backgroundColor: 'rgba(255,255,255,0.05)',
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.98 }}
  >
    <img 
      src={lang.icon} 
      alt={lang.language} 
      style={{ marginRight: '7px', marginLeft: '-5px' }} 
    />
    {lang.language}
  </motion.button>
))}

                </div>
              </div>

              <div className={clsx(styles.groups)}>
              <motion.h3
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3 }}
>
  Software/Tools:
</motion.h3>
                <div className={clsx(styles.language)}>
                {tools.map((lang, index) => (
  <motion.button
    key={index}
    className={clsx(styles.button)}
    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    whileHover={{
      scale: 1.05,
      backgroundColor: 'rgba(255,255,255,0.05)',
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.98 }}
  >
    <img 
      src={lang.icon} 
      alt={lang.language} 
      style={{ marginRight: '7px', marginLeft: '-5px' }} 
    />
    {lang.language}
  </motion.button>
))}

                </div>
              </div>

              <div className={clsx(styles.groups)}>
              <motion.h3
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3 }}
>
  Certifications:
</motion.h3>
                <div className={clsx(styles.language)}>
                {certs.map((lang, index) => (
  <motion.button
    key={index}
    className={clsx(styles.button)}
    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    whileHover={{
      scale: 1.05,
      backgroundColor: 'rgba(255,255,255,0.05)',
      transition: { duration: 0.2 }
    }}
    whileTap={{ scale: 0.98 }}
  >
    <img 
      src={lang.icon} 
      alt={lang.language} 
      style={{ marginRight: '7px', marginLeft: '-5px' }} 
    />
    {lang.language}
  </motion.button>
))}

                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Languages