import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <section>
            <div>
                {/* Placeholder for profile image */} 
                <img />
            </div> 

            <div>
                <h2>Hi There,</h2>
                <h3>I'm Thabang</h3>
                <h4>A Full-Stack Developer</h4>
                
                <p>Aspiring full stack developer passionate about building functional, user-friendly web applications from front to back; driven by the challenge of creating seamless digital experiences.</p>
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
            </div>

        </section>
  )
}

export default Home