import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrappper';
import './Skills.scss';

const skillsData = [
  {
    name: 'JavaScript',
    //bgColor: '#F7DF1E',
    icon: images.javascript,
  },
  {
    name: 'React',
    //bgColor: '#61DAFB',
    icon: images.react,
  },
  {
    name: 'Java',
    //bgColor: '#F7DF1E',
    icon: images.java,
  },
  {
    name: 'Python',
    //bgColor: '#F7DF1E',
    icon: images.python,
  },
  {
    name: 'HTML',
    //bgColor: '#F7DF1E',
    icon: images.html,
  },
  {
    name: 'CSS',
    //bgColor: '#F7DF1E',
    icon: images.css,
  },
  {
    name: 'Steamlit',
    //bgColor: '#F7DF1E',
    icon: images.streamlit,
  },
  {
    name: 'Spring',
    //bgColor: '#F7DF1E',
    icon: images.spring,
  },
  {
    name: 'SQL',
    //bgColor: '#F7DF1E',
    icon: images.sql,
  },
  // Add more skills as needed
];

const experiencesData = [
  {
    year: 'Apr 2023 - Jun 2023',
    works: [
      {
        name: 'Machine Learning and Data Science Intern',
        company: 'PHN Technologies Pvt Ltd',
        //desc: 'Developed and maintained the frontend of various web applications.',
      }
    ],
  },
  {
    year: 'Aug 2023 - Feb 2024',
    works: [
      {
        name: 'Web Developer ',
        company: 'C G I',
        desc: 'Worked on both frontend and backend development tasks.',
      },
    ],
  },
  // Add more experiences as needed
];

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Set the hardcoded data instead of fetching from a backend
    setExperiences(experiencesData);
    setSkills(skillsData);
  }, []);

  return (
    <>
      <h2 className="head-text"> <span>Skills </span>  &  <span>Experiences </span></h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
