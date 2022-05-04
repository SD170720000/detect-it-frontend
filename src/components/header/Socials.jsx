import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Socials = () => {
  let github_url = "https://github.com/SD170720000/detect-it"

  return (
    <div className="header__socials">
        <a href={github_url} target="_blank"><BsGithub/></a>
    </div>
  )
}

export default Socials
