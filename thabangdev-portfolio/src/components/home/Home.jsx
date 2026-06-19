import React from 'react'
import About from '../about/About';
import Project from '../projects/Project';
import Expertise from '../expertise/Expertise';
import Blog from '../articles/Blog';
import Contact from '../contact/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Profile from '../../assets/images/profile.jpg';
import { Link } from 'react-scroll';

function Home() {
    return (
        <>
            <section id='home' className='home-section'>
            
                <div> 
                    <img src={Profile} alt='profile image' style={{width: '150px'}}/>
                </div> 

                <div className='intro-container'>
                    <h2>Hi There,</h2>
                    <h3>I'm Thabang Phoshoko</h3>
                    <h4>A Full-Stack Developer</h4>
                    <p>Full stack developer passionate about building functional, user-friendly web applications from front to back; driven by the challenge of creating great digital experiences.</p>
                </div>

                <div className='home-icons'>
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    <FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#33a7ff",}} />
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                    <FontAwesomeIcon icon={faXTwitter} size="xl" style={{color: "#000000",}} />
                    <FontAwesomeIcon icon={faDiscord} size="xl" style={{color: "#9875ff",}} /> 
                </div> 

                <div className='home-buttons'>
                    <button className='contact-btn'><Link to="contact-me" smooth={true} duration={500} offset={-70}>Lets Chat</Link></button>
                    <button className='projects-btn'><Link to="projects" smooth={true} duration={500} offset={-70}>View Projects</Link></button>
                </div>

            </section>
            <About />
            <Project />
            <Expertise />
            <Blog />
            <Contact />
        </>
    )
}

export default Home