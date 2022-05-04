import React from 'react'
import './footer.css'
import IMG from '../../assets/detectit-logo-dark.svg'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  const pages = [
    { key: 1, id: '#', name: 'Home' },
    { key: 2, id: '#research', name: 'Research' },
    { key: 3, id: '#team', name: 'Our Team' },
    { key: 4, id: '#about', name: 'About US' },
    { key: 5, id: '#contact', name: 'Contact' },
  ]

  const socials = [
    { key: 1, icon: BsGithub, link: 'https://github.com/SD170720000/detect-it' },
  ]

  return (
    <footer id='footer'>

      
      <a href="#" className='footer__logo'>
      <img src={IMG} alt="" />
      <span>detectit</span>
      </a>
    

      <ul className='permalinks'>
        {
          pages.map((page) => {
            return (
              <li key={page.key}>
                <a href={page.id} target="_blank">{page.name}</a>
              </li>
            )
          })
        }
      </ul>

      <div className="footer__socials">
        {
          socials.map((social) => {
            const Icon = social.icon
            return (
              <a key={social.key} href={social.link} target='_blank'>
                <Icon />
              </a>
            )
          })
        }
      </div>

      <div className="footer__copyright">
        <small>&copy; Copyright 2022 Detect-it. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
