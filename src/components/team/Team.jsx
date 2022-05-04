import React from 'react'
import './team.css'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import IMG1 from '../../assets/subhankar.png'
import IMG2 from '../../assets/sneha.png'
import IMG3 from '../../assets/abhishek.png'
import IMG from '../../assets/bg-decore.png'

const Team = () => {

    const members = [
        {
            key: 1, name: 'Subhankar Das',
            links: {
                img: IMG1,
                insta: 'https://www.instagram.com/subhankar17072000/?hl=en',
                linkedin: 'https://www.linkedin.com/in/subhankar-das-339750213/',
                email: 'subhudas1707@gmail.com'
            }
        },
        {
            key: 2, name: 'Abhishek Sonar',
            links: {
                img: IMG3,
                insta: 'https://www.instagram.com/sonar_abhi8/?hl=en',
                linkedin: 'https://www.linkedin.com/in/abhishek-sonar-08110a187',
                email: 'sonarabhi2000@gmail.com'
            }
        },
        {
            key: 3, name: 'Sneha Khachne',
            links: {
                img: IMG2,
                insta: '',
                linkedin: 'https://www.linkedin.com/in/sneha-khachane/',
                email: 'sdkhachane2000@gmail.com'
            }
        }
    ]

    return (
        <section id='team'>
            <h5>Who Made Me</h5>
            <h2>Meet My Team</h2>

            <div className="container team__container">
                {
                    members.map((member) => {
                        return (
                            <div key={member.key}>

                                <div style={{
                                    width: "100%",
                                    height: "270px",
                                    borderRadius: "10px",
                                    background: 'url(' + member.links.img + '),url(' + IMG + '),var(--color-primary-variant)',
                                    backgroundRepeat: "no-repeat no-repeat",
                                    backgroundPosition: "0.8rem 1.15rem"
                                }}>

                                </div>
                                <h3>{member.name}</h3>
                                <h5 className='text-light'>{member.links.email}</h5>
                                <div className='member-icons'>
                                    <a href={member.links.linkedin} target="_blank">
                                        <BsLinkedin />
                                    </a>
                                    {(member.links.insta === '') ? '' :
                                        <a href={member.links.insta} target="_blank">
                                            <BsInstagram />
                                        </a>}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Team