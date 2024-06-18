import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Work.module.scss';
import Accordion from './Accordion';

const jobs = [
  {
    id: 1,
    title: 'Roche',
    position: 'Software Engineer Intern',
    description: ['• Working on Cloud Platform'],
    time: 'JUNE 2024 - PRESENT'
  },
  {
    id: 2,
    title: 'ASUCD Pantry',
    position: 'Full-Stack Developer',
    description: [
      '• Maintaining and improving an online ecommerce platform used by hundreds of patrons every month with team of developers in an AGILE work environment',
      '• Enhanced user interface using HTML, CSS, and Javascript for smooth and engaging user experience',
      '• Utilized Django and PostgreSQL for database queries and smooth data retrieval'
    ],
    time: 'FEB 2024 - PRESENT'
  },
  {
    id: 3,
    title: 'AggieWorks',
    position: 'Software Engineer',
    description: [
      '• Collaborated with a team of 20 developers, designers, and product managers in an AGILE work environment to build applications for nearly 40,000 students using React, TypeScript, Supabase, and Prisma',
      '• Spearheaded the development and implementation of a novel photo uploading method, significantly improving user experience and fostering enhanced self-expression for a roommate-matching app',
      '• Successfully orchestrated the migration of onboarding processes to a new database seamlessly integrated with the profile page, ensuring data continuity and system efficiency,'
    ],
    time: 'OCT 2023 - PRESENT'
  },
  {
    id: 4,
    title: 'The Aggie Transcript',
    position: 'Web Developer',
    description: [
      '• Developed and launched an engaging website for the Undergraduate Life Sciences Journal, providing a platform for students to author and share personal narratives',
      '• Coordinated with editors and graphic designers to facilitate the weekly publication of papers, ensuring a seamless integration of content and design elements'
    ],
    time: 'NOV 2023 - PRESENT'
  },
  {
    id: 5,
    title: 'MindHome',
    position: 'Software Engineer Intern',
    description: [
      '• Leveraged Javascript, HTML, and CSS to enhance the main product website on the Shopify platform to ensure visual appeal',
      '• Collaborated with ten other developers in an AGILE environment to improve user experience optimizations'
    ],
    time: 'JAN 2024 - JUNE 2024'
  },
  {
    id: 6,
    title: 'Stealth Startup',
    position: 'Software Engineer Intern',
    description: [
      '• Developed interactive landing/product pages to translate Figma designs into functional web elements, resulting in a 70% increase in website traffic',
      '• Implemented a system-wide change for a chat application, replacing numerical IDs with actual usernames, to enhance user recognition and facilitate smoother interactions within the team of 50+ people',
      '• Produced training videos for internal use, enhancing team knowledge sharing and onboarding processes',
      '• Collaborated effectively with design and product teams to develop websites aligned with project goals'
    ],
    time: 'JULY 2023 - JAN 2024'
  },
  {
    id: 7,
    title: 'Nonprofit Organization',
    position: 'Machine Learning Intern',
    description: [
      '• Applied pre-trained models such as VGG16 and ResNet50 to predict and fine-tune images with facial features',
      '• Labeled data and trained CNN architecture for classifying images',
      '• Coordinated with other members on group projects weekly, presenting ideas to managers'
    ],
    time: 'JULY 2021 - SEP 2022'
  }
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Set the initial value to the ID of the job you want to be selected initially

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const activeJob = jobs.find(job => job.id === activeIndex);

  return (
    <section className={clsx(styles.work)} id="work">
      <h2>#work</h2>
      <div className={clsx(styles.line)} />
      <div className={clsx(styles.accord)}>
        <div className={styles.titleContainer}>
          {jobs.map((job) => (
            <div
              key={job.id}
              className={clsx(styles.titleItem, { [styles.active]: job.id === activeIndex })}
              onClick={() => handleAccordionClick(job.id)}
            >
              <div className={styles.title}>{job.title}</div>
            </div>
          ))}
        </div>
        {activeJob && (
          <div className={styles.descriptionContainer}>
            <div className={styles.activeArea}>
              <div className={styles.position}>{activeJob.position}<span> @ {activeJob.title}</span></div>
              <div className={styles.time}>{activeJob.time}</div>
              <div className={styles.description}>
                <ul>
                  {activeJob.description.map((bulletPoint, index) => (
                    <li key={index}>{bulletPoint}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;