import React from 'react'
import clsx from 'clsx'
import styles from './Portfolio.module.scss'
import { websiterma, code, carwash, live, galaxia } from '../public'

const Portfolio = () => {
  return (
    <section className={clsx(styles.portfolio)}>
        <div className={clsx(styles.container)}>
            <h2>PORTFOLIO</h2>
            <p>Projects I have created so far </p>
            <div className={clsx(styles.websites)}>
                <div className={clsx(styles.website)}>
                    <div className={clsx(styles.image)}>
                        <a><img src={websiterma} /></a>
                    </div>
                    <div className={clsx(styles.text)}>
                        <h3>RMA - Rate My Apartment</h3>
                        <p>An app for reviewing and rating apartments around Davis, CA, built for HackDavis 2023.</p>
                        
                        <div className={clsx(styles.buttons)}>
                            <p>MongoDB</p>
                            <p>Express.js</p>
                            <p>React Native</p>
                            <p>Node.js</p>
                        </div>

                        <div className={clsx(styles.links)}>
                            <a href='https://github.com/kaitlynlie/RMA-RateMyApartment'>
                                <p>Code</p>
                                <img src={code} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.website)}>
                    <div className={clsx(styles.text)}>
                        <h3>Car Wash</h3>
                        <p>A website for a carwash company called Big Bad Carwash, inspired by one of my previous jobs.</p>
                        
                        <div className={clsx(styles.buttons)}>
                            <p>React</p>
                            <p>Typescript</p>
                            <p>scss</p>
                        </div>

                        <div className={clsx(styles.links)}>
                            <a href='https://github.com/kaitlynlie/carwash'>
                                <p>Code</p>
                                <img src={code} />
                            </a>

                            <a href='https://carwash-kaitlynlie.vercel.app'>
                                <p>Live Demo</p>
                                <img src={live} />
                            </a>
                        </div>
                    </div>
                    <div className={clsx(styles.secondimage)}>
                        <a><img src={carwash} /></a>
                    </div>
                </div>

                <div className={clsx(styles.website)}>
                    <div className={clsx(styles.thirdimage)}>
                        <a><img src={galaxia} /></a>
                    </div>
                    <div className={clsx(styles.text)}>
                        <h3>Galaxia</h3>
                        <p>Galaxia is a website dedicated to a company that sells and builds PCs centered around gaming, delivering the highest performance with the best materials and results.</p>
                        
                        <div className={clsx(styles.buttons)}>
                            <p>React</p>
                            <p>Javascript</p>
                            <p>Tailwind</p>
                        </div>

                        <div className={clsx(styles.links)}>
                            <a href='https://github.com/kaitlynlie/galaxia_pcs'>
                                <p>Code</p>
                                <img src={code} />
                            </a>

                            <a href='https://galaxia-pcs-kaitlynlie.vercel.app'>
                                <p>Live Demo</p>
                                <img src={live} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Portfolio