import './Navbar.scss'
import { useState } from 'react'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <motion.div
        className='app__navbar-burger'
        onClick={() => setToggle(!toggle)}
        whileInView={
          toggle
            ? {
                rotate: [0, -360],
                background: 'red',
              }
            : { rotate: [-360, 0] }
        }
        transition={{ duration: 1, ease: 'easeOut', type: 'tween' }}
      >
        {toggle ? <HiX /> : <HiMenuAlt4 />}
      </motion.div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className='app__navbar-menu'
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut', type: 'tween' }}
          >
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
