import React from 'react'
import './about.css'
import IMG from '../../assets/social-media.webp'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'

const About = () => {
  const cards = [
    { key: 1, icon: FiUsers, title: 'Profile Check', subtitle: 'Real or Fake' },
    { key: 2, icon: FaAward, title: 'Helping Hand', subtitle: 'Healthy Society' },
    { key: 3, icon: BsTwitter, title: 'Twitter', subtitle: 'Twitter Profile' },
  ]
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG} alt="Social Media" />
          </div>
        </div>
        <div className="about__content">
          
          <div className="about__cards">
            {
              cards.map((card) => {
                const Icon = card.icon;
                return (
                  <article className='about__card' key={card.key}>

                    <Icon className='about__icon' />
                    <h5>{card.title}</h5>
                    <small>{card.subtitle}</small>

                  </article>
                )
              })
            }
          </div>

          <p>
          We are on a mission to build a platform for authentication of a profile that is fair, secure, accurate, future-ready, and accessible from anywhere.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
