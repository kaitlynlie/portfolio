import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Work.module.scss';
import Accordion from './Accordion';

const jobs = [
    {
        id: 1,
        title: 'MindHome',
        position: 'Software Engineer Intern',
        description: ['• Collaborating with 10 developers in an AGILE environment to improve visual appeal and overall user experience'],
        time: 'JAN 2024 - PRESENT'
    },
  {
    id: 2,
    title: 'AggieWorks',
    position: 'Software Engineer',
    description: ['• Collaborated with a team of 20 developers, designers, and product managers in an AGILE work environment to build applications for nearly 40,000 students using React, Typescript, Supabase, and Prisma',],
    time: 'OCT 2023 - PRESENT'
  },
  {
    id: 3,
    title: 'The Aggie Transcript',
    position: 'Web Developer',
    description: ['• Developed and launched an engaging website for the Undergraduate Life Sciences Journal, providing a platform for students to author and share personal narratives', '• Coordinated with editors and graphic designers to facilitate the weekly publication of papers, ensuring a seamless integration of content and design elements'],
    time: 'NOV 2023 - PRESENT'
  },
  {
    id: 4,
    title: 'Stealth Startup',
    position: 'Software Engineer Intern',
    description: ['• Developed interactive landing/product pages to translate Figma designs into functional web elements, resulting in a 70% increase in website traffic', '• Implemented a system-wide change for a chat application, replacing numerical IDs with actual usernames, to enhance user recognition and facilitate smoother interactions within the team of 50+ people', '• Produced training videos for internal use, enhancing team knowledge sharing and onboarding processes', '• Collaborated effectively with design and product teams to develop websites aligned with project goals'],
    time: 'JULY 2023 - JAN 2024'
  },
  {
    id: 5,
    title: 'Nonprofit Organization',
    position: 'Machine Learning Intern',
    description: ['• Applied pre-trained models such as VGG16 and ResNet50 to predict and fine-tune images with facial features', '• Labeled data and trained CNN architecture for classifying images', '• Coordinated with other members on group projects weekly, presenting ideas to managers'],
    time: 'JULY 2021 - SEP 2022'
  },
];

const Work = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Set the initial value to the ID of the job you want to be selected initially
  
    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
      };
  
    return (
      <section className={clsx(styles.work)} id='work'>
        <h2>#work</h2>
        <div className={clsx(styles.accord)}>
          {jobs.map((job) => (
            <Accordion
              key={job.id}
              title={job.title}
              position={job.position}
              time={job.time}
              description={job.description}
              isActive={job.id === activeIndex}
              onClick={() => handleAccordionClick(job.id)}
            />
          ))}
        </div>
      </section>
    );
  };

export default Work;