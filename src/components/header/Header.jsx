import React from 'react'
import CTA from './CTA'
import './header.css'
import IMG from '../../assets/detectit-logo-light.svg'
import IMG1 from '../../assets/good-bad.svg'
import Socials from './Socials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>

        <a href="#" className='header__logo'>
          <img src={IMG} alt="" />
          <span>detectit</span>
        </a>

        <h5 className='text-light'>Fake Profile Detection</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={IMG1} alt="image" />
        </div>

        <a href="#footer" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
