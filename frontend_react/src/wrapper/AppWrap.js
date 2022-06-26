import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <div className={`app__container${className}`} id={idName}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
          <Component />
          <div className='copyright'>
            <p className='p-text'>@2022 BACHAR</p>
            <p className='p-text'>All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    )
  }

export default AppWrap
