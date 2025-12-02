import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Profile from '../../assets/images/profile.jpg';

function Home() {
  return (
    <section id='home' className='flex flex-col justify-center items-center text-center gap-4 py-10 mt-30 mx-10 space-y-2'>
            <div> 
                <img src={Profile} alt='profile image' style={{width: '150px'}}/>
            </div> 

            <div className='space-y-1'>
                <h2 className='text-2xl'>Hi There,</h2>
                <h3 className='text-4xl font-bold'>I'm Thabang Phoshoko</h3>
                <h4 className='text-2xl italic'>A Full-Stack Developer</h4>
                <p>Full stack developer passionate about building functional, user-friendly web applications from front to back; driven by the challenge of creating great digital experiences.</p>
            </div>

            <div className='flex gap-8'>
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
                <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#33a7ff",}} />
                <FontAwesomeIcon icon={faGithub} size="xl" />
                <FontAwesomeIcon icon={faXTwitter} size="xl" style={{color: "#000000",}} />
                <FontAwesomeIcon icon={faDiscord} size="xl" style={{color: "#9875ff",}} /> 
            </div> 

            <div className='flex gap-6'>
                <button className='font-bold border-2 rounded-3xl p-2'>Lets Chat</button>
                <button className='font-bold border-2 rounded-3xl p-2'>View Projects</button>
            </div>

        </section>
  )
}

export default Home