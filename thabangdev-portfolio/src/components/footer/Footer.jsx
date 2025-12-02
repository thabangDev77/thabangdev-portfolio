import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';


function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center gap-2 my-5 pt-4'>

      <p className='text-sm italic'>Thanks for checking our my Portfolio Website</p>
      <h3 className='text-3xl font-bold'>Thabang.Dev</h3>
      <p><Link to="contact-me" smooth={true} duration={500} offset={-70} className='font-bold italic'>Get in touch</Link> with me and get the ball rolling</p>
      <div className='flex gap-8 my-2'>
          {/* Social media icons */}
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
          <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#33a7ff",}} />
          <FontAwesomeIcon icon={faGithub} size="xl" />
          <FontAwesomeIcon icon={faXTwitter} size="xl" style={{color: "#000000",}} />
          <FontAwesomeIcon icon={faDiscord} size="xl" style={{color: "#9875ff",}} />
                     
      </div>
      <div className='flex gap-10 mb-2 font-bold border-t border-x p-2 rounded-xl'>
          <Link to="home" smooth={true} duration={500} offset={-70}>Home</Link>
          <Link to="about-me" smooth={true} duration={500} offset={-70}>About</Link>
          <Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link>
          <Link to="expertise" smooth={true} duration={500} offset={-70}>Expertise</Link>
          <Link to="blog" smooth={true} duration={500} offset={-70}>Blog</Link>
        
      </div>
      <p className='text-'>&copy; 2025 Thabang.Dev. All rights reserved.</p>
      <p className='text-xs'>Designed and Developed by <a href="#">Thabang</a></p>
  
    </footer>
  )
}

export default Footer