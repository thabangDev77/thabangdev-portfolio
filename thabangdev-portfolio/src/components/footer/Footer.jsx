import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center gap-2 my-5 pt-4'>

      <p className='text-sm italic'>Thanks for checking our my Portfolio Website</p>
      <h3 className='text-3xl font-bold'>Thabang.Dev</h3>
      <p>Get in touch with me and get the ball rolling</p>
      <div>
          {/* Social media icons */}
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
          <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#33a7ff",}} />
          <FontAwesomeIcon icon={faGithub} size="xl" />
          <FontAwesomeIcon icon={faXTwitter} size="xl" style={{color: "#000000",}} />
          <FontAwesomeIcon icon={faDiscord} size="xl" style={{color: "#9875ff",}} />
                     
      </div>
      <div>
          <a href="#">Home</a>
          <a href="#">About Me</a>
          <a href="#">Projects</a>
          <a href="#">Expertise</a>
          <a href="#">Blog</a>
      </div>
      <p className='text-'>&copy; 2025 Thabang.Dev. All rights reserved.</p>
      <p className='text-xs'>Designed and Developed by <a href="#">Thabang</a></p>
  
    </footer>
  )
}

export default Footer