import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Profile from '../../assets/images/profile.jpg';

function Home() {
  return (
    <section className='flex flex-col justify-center items-center text-center gap-4 py-10 mx-10 space-y-2'>
            <div> 
                <img src={Profile} alt='profile image' style={{width: '150px'}}/>
            </div> 

            <div>
                <h2>Hi There,</h2>
                <h3>I'm Thabang</h3>
                <h4>A Full-Stack Developer</h4>
                <p>Full stack developer passionate about building functional, user-friendly web applications from front to back; driven by the challenge of creating great digital experiences.</p>
            </div>

            <div>
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
                <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#33a7ff",}} />
                <FontAwesomeIcon icon={faGithub} size="xl" />
                <FontAwesomeIcon icon={faXTwitter} size="xl" style={{color: "#000000",}} />
                <FontAwesomeIcon icon={faDiscord} size="xl" style={{color: "#9875ff",}} /> 
            </div> 

            <div>
                <button >Lets Chat</button>
                <button>View Projects</button>
            </div>

        </section>
  )
}

export default Home