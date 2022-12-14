import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/React.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <section id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Saran Warin</h1>
        <h5 className="text-light">WEB DEVELOPER</h5>
        <CTA/>
        <HeaderSocials/>

          <div className='me'>
              <img src={ME} alt="me"/>
          </div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </section>
  )
}

export default Header