import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants';
import { AppWrap } from '../../wrappper';
import './About.scss'


const About = () => {
    const about = [
        { title: 'Beginner MERN stack developer', description: 'Creating responsive and dynamic websites with modern technologies.', imgUrl: images.logoMERN },
        { title: 'Front end Development', description: 'Building interactive and user-friendly interfaces with cutting-edge front-end technologiess', imgUrl: images.about02 },
        { title: 'Java Development', description: 'Developing robust and scalable applications using Java.', imgUrl: images.about03 },
        { title: 'Python Full Stack', description: 'Delivering complete and efficient solutions with expertise in both front-end and back-end Python development', imgUrl: images.about04 }

    ];
    return (
        <>
            <h2 className='head-text'>
                Crafting Code with Precision<span>&nbsp;</span>
                <span>Innovative Solutions</span><br />
                for<span>&nbsp;</span>
                <span>Modern Challenges</span>
            </h2>



            <div className='app__profiles'>
                {about.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>

                    </motion.div>
                ))}
            </div>
        </>
    )
}

export default AppWrap(About, 'about');
