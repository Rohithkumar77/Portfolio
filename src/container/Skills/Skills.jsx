import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { images } from '../../constants';
import reactr from '../../assets/react.jpg'
import ml from '../../assets/ml.jpg';
import google from '../../assets/google.jpg';

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
    name: 'MongoDB',
    //bgColor: '#F7DF1E',
    icon: images.mdb,
  },
  {
    name: 'SQL',
    //bgColor: '#F7DF1E',
    icon: images.sql,
  },
  {
    name: 'ExpressJs',
    icon: images.ex,
  },
  {
    name: 'NodeJs',
    icon: images.nx,
  }
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

const certificationsData = [
  {
    title: 'Certification 1',
    reactr,
    icon: images.reactr, // Image for certification 1
  },
  {
    title: 'Certification 2',
    ml,
    icon: images.ml, // Image for certification 2
  },
  {
    title: 'Certification 3',
    google,
    icon: images.google, // Image for certification 3
  },
];

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);

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
          <h2 className="head-text">Certifications</h2>
      <div className="app__certifications-list">
        <div className="app__certifications-item">
          <div className="app__flex">
            <img className='ims' src={reactr} alt={'React certificate'} />
          </div>
        </div>
        <div className="app__certifications-item">
          <div className="app__flex">
            <img className='ims' src={google} alt={'Python certificate'}  />
          </div>
        </div>
        <div className="app__certifications-item">
          <div className="app__flex">
            <img className='ims' src={ml} alt={'Machine Learning certificate'}  />
          </div>
        </div>
      </div>
        </div>
      </div>
      {/* Certifications Section */}
  

    </>
  );
};


export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
