import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <FaLinkedinIn />
      </div>
      <div>
        <FaGithub />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  )
}

export default SocialMedia
