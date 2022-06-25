import './About.scss'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { images } from '../../constants'

const abouts = [
  {
    title: 'Frontend Development',
    description: 'I am a good web developer, pationat in React',
    imgUrl: images.about01,
  },
  {
    title: 'Backend Development',
    description: 'I am a good web developer, pationat in React',
    imgUrl: images.about02,
  },
  {
    title: 'Design Development',
    description: 'I am a good web developer, pationat in React',
    imgUrl: images.about03,
  },
  {
    title: 'MERN Stack',
    description: 'I am a good web developer, pationat in React',
    imgUrl: images.about04,
  },
]

const About = () => {
  return (
    <div className='app__about'>
      <h2 className='head-text'>
        I know that <span>Good Development</span> <br /> means{' '}
        <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0,1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: '1.5rem' }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: '.6rem' }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default About
