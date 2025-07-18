import React from 'react'
import clsx from 'clsx'
import styles from './Portfolio.module.scss'
import { rma, githubLight, roomu, live, stroke, ttt } from '../assets'

const Portfolio = () => {
  return (
    <section className={clsx(styles.portfolio)} id='projects'>
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.header)}>
                <h2>#PROJECTS</h2>
            </div>
            <div className={clsx(styles.websites)}>

                <div className={clsx(styles.website)}>
                    <div className={clsx(styles.header)}>
                    <div className={clsx(styles.image)}>
                        <a><img src={roomu} /></a>
                    </div>
                    <div className={clsx(styles.links)}>
                            <a href='https://roomu.aggieworks.org' target="_blank" rel="noopener noreferrer">
                                {/* <p>Website</p> */}
                                <img src={live} className={clsx(styles.live)}/>
                            </a>
                        </div>
                    </div>
                    <div className={clsx(styles.text)}>
                        <h3>RoomU</h3>
                        <p>A roommate matching app for students at UC Davis. Built with my team at AggieWorks.</p>
                        
                        <div className={clsx(styles.buttons)}>
                            <p>React</p>
                            <p>Typescript</p>
                            <p>Supabase</p>
                        </div>
                    </div>
                </div>

                {/* <img src={dots} className={clsx(styles.designs)}/> */}

                <div className={clsx(styles.website)}>
                    <div className={clsx(styles.header)}>
                    <div className={clsx(styles.image)}>
                        <a><img src={stroke} /></a>
                    </div>
                    {/* <div className={clsx(styles.links)}>
                            <a href='https://github.com/kaitlynlie/strokeprediction'>
                                <img src={github} />
                            </a>
                        </div> */}
                        </div>
                    <div className={clsx(styles.text)}>
                        <h3>Stroke Prediction</h3>
                        <p>A stroke prediction model that predicts the likelihood of a person getting a stroke. Final project for ECS 171: Machine Learning.</p>
                        
                        <div className={clsx(styles.buttons)}>
                            <p>Python</p>
                            <p>Flask</p>
                            <p>HTML/CSS</p>
                        </div>
                    </div>
                </div>

                {/* <div className={clsx(styles.website)}>
                    <div className={clsx(styles.header)}>
                    <div className={clsx(styles.image)}>
                        <a><img src={leukemia} /></a>
                    </div>
                    <div className={clsx(styles.links)}>
                            <a href='https://github.com/kaitlynlie/strokeprediction'>
                                <img src={github} />
                            </a>
                        </div>
                    </div>
                    <div className={clsx(styles.text)}>
                        <h3>Leukemia Classification</h3>
                        <p>A classification model that distinguishes between normal and cancer cells. Final project for ECS 174: Computer Vision.</p>
                        
                        <div className={clsx(styles.buttons)}>
                            <p>Python</p>
                        </div>
                    </div>
                </div> */}
{/* 
                <div className={clsx(styles.website)}>
                    <div className={clsx(styles.header)}>
                    <div className={clsx(styles.image)}>
                        <a><img src={recipedia} /></a>
                    </div>
                    </div>
                    <div className={clsx(styles.text)}>
                        <h3>Recipedia</h3>
                        <p>A website for users to search recipes or add their own.</p>
                        
                        <div className={clsx(styles.buttons)}>
                            <p>REST APIs</p>
                            <p>React</p>
                            <p>HTML/CSS</p>
                        </div>

                        <div className={clsx(styles.links)}>
                            <a href='https://github.com/kaitlynlie/strokeprediction'>
                                <a><p>In progress...</p></a>
                                <img src={github} />
                            </a>

                            <a href='https://galaxia-pcs-kaitlynlie.vercel.app'>
                                <p>Live</p>
                                <img src={live} />
                            </a>
                        </div>
                    </div>
                </div> */}

                <div className={clsx(styles.website)}>
                    <div className={clsx(styles.header)}>
                    <div className={clsx(styles.image)}>
                        <a><img src={ttt} /></a>
                    </div>
                    <div className={clsx(styles.links)}>
                            <a href='https://github.com/kaitlynlie/talktotext' target="_blank" rel="noopener noreferrer">
                                {/* <p>Code</p> */}
                                <img src={githubLight} className={clsx(styles.github)}/>
                            </a>
                        </div>
                    {/* <div className={clsx(styles.links)}>
                            <a href='https://github.com/kaitlynlie/strokeprediction'>
                                <img src={github} />
                            </a>
                        </div> */}
                    </div>
                    <div className={clsx(styles.text)}>
                        <h3>Talk To Text</h3>
                        <p>A website that allows students to upload their lecture recordings for automatic summarization and key point extraction with customizable features.</p>
                        
                        <div className={clsx(styles.buttons)}>
                            <p>Python</p>
                            <p>Flask</p>
                            <p>HTML/CSS</p>
                            <p>Digital Ocean</p>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.website)}>
                    <div className={clsx(styles.header)}>
                        <div className={clsx(styles.image)}>
                            <a><img src={rma} /></a>
                        </div>
                        <div className={clsx(styles.links)}>
                            <a href='https://github.com/kaitlynlie/RMA-RateMyApartment' target="_blank" rel="noopener noreferrer">
                                {/* <p>Code</p> */}
                                <img src={githubLight} className={clsx(styles.github)}/>
                            </a>
                        </div>
                    </div>
                    <div className={clsx(styles.text)}>
                        <h3>Rate My Apartment</h3>
                        <p>An app for reviewing and rating apartments around Davis, CA. Built for HackDavis 2023.</p>
                        
                        <div className={clsx(styles.buttons)}>
                            <p>MongoDB</p>
                            <p>Express.js</p>
                            <p>React Native</p>
                            <p>Node.js</p>
                        </div>
                    </div>
                </div>
            </div>
            <button>
                <a href="https://github.com/kaitlynlie" target="_blank" rel="noopener noreferrer">Learn More</a>
            </button>
        </div>
    </section>
  )
}

export default Portfolio