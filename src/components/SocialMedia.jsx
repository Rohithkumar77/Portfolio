import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://x.com/BSROHITHKUMAR1" target="_blank" rel="noopener noreferrer">
      <BsTwitter />
    </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/rohitkumar2106/" target="_blank" rel="noopener noreferrer">
      <BsLinkedin/>
    </a>
    </div>
  </div>
);

export default SocialMedia;
