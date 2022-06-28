import './About.scss'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { images } from '../../constants'
import { client, urlFor } from '../../client'
import { AppWrap } from '../../wrapper'

const About = () => {
  const [abouts, setAbouts] = useState([])
  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query).then((data) => setAbouts(data))
  }, [])
  
  return (
    <div className='app__about'>
      <h2 className='head-text'>
        I know that <span>Good Development</span> <br /> means{' '}
        <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
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

export default AppWrap(About, 'about')
