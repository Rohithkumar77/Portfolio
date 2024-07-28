import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap } from '../../wrappper';
import { MotionWrap } from '../../wrappper';
import './Project.scss';

// Hardcoded work data
const worksData = [
  {
    title: 'User Management System',
    description: 'A system for managing user accounts and profiles.',
    imgUrl: images.about04,
    //projectLink: '',
    codeLink: 'https://github.com/Rohithkumar77/user-managemnet-system',
    tags: ['Java', 'React JS'],
  },
  {
    title: 'Diet Recommendations System',
    description: 'A system that provides personalized diet recommendations.',
    imgUrl: images.about02,
    //projectLink: '',
    codeLink: 'https://github.com/health-conscious-2024/Tailored-Diet-Recommendation-with-KNN',
    tags: ['Python'],
  },
  {
    title: 'Promptopia',
    description: 'A simple project for creating and sharing prompts.',
    imgUrl: images.about01,
    //projectLink: 'https://project1.com',
    codeLink: 'https://github.com/project1',
    tags: ['React JS'],
  },
  {
    title: 'Employee Salary Prediction',
    description: 'A tool to predict employee salaries based on various factors.',
    imgUrl: images.about03,
    //projectLink: 'https://project1.com',
    codeLink: 'https://github.com/Rohithkumar77/employee_salary_prediction',
    tags: ['Python'],
  },
  {
    title: 'Amazon Clone',
    description: 'A UI clone of the Amazon website.',
    imgUrl: images.amazon,
    //projectLink: 'https://project2.com',
    codeLink: 'https://github.com/Rohithkumar77/AmazonClone',
    tags: ['UI/UX'],
  },
  // Add more projects as needed
];

const Project = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    // Set the static work data
    setWorks(worksData);
    setFilterWork(worksData);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Java', 'Python', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Project, 'app__works'),
  'project',
  'app__primarybg',
);
