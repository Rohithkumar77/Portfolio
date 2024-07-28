import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import './Contact.scss';
import { AppWrap, MotionWrap } from '../../wrappper';

const Contact = () => {
  return (
    <div className="app__contact">
      <h2 className="head-text">Contact Me</h2>
      <div className="app__contact-container">
        <div className="app__contact-icons">
          <a href="https://x.com/BSROHITHKUMAR1" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>
          <a href="https://www.linkedin.com/in/rohitkumar2106/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://github.com/Rohithkumar77/" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
          <a href="mailto:sunkesularohithkumar77@gmail.com">
            <MdEmail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contact',
  'app__primarybg'
);
