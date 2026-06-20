import React from 'react'
import { Link } from 'react-router-dom';
import aboutImage from '../../assets/images/about.jpg'

function About() {
    return (
        <section id='about-me' className='about-me'>
            <h2 className='about-me-heading'>About Me</h2>

            <div className='about-container'> 
                <div className='img-container'>
                    <img className='about-img' src={aboutImage} alt="about me image"/> 
                </div>
                <div className='about-description'>
                    <p>Hi, I'm <span>Thabang</span>, a dedicated student with a strong interest in <span>full stack web development</span>. I'm passionate about building complete web applications; from crafting responsive front-end interfaces to designing robust back-end systems. I enjoy the challenge of turning ideas into interactive digital experiences that are both functional and visually appealing.</p>
                    <br/>
                    <p>Currently, I'm focused on expanding my skills in technologies like <span>HTML, CSS, JavaScript, Python, and Node.js</span>, while diving deeper into frameworks like <span>React and Express</span>. I love learning by doing; whether it's working on personal projects, contributing to collaborative teams, or exploring open-source code to understand how real-world systems are built.</p>
                    <br/>
                    <p>As I grow in my journey as a developer, I'm excited to connect with others, learn continuously, and create impactful solutions. Whether it's a sleek portfolio site or a full-featured web app, I believe in <span>writing clean code</span> and <span>building with purpose.</span></p>  
                </div>
            </div>
            <button className='more-about-btn'><Link to="about-me">Discover More About Me</Link></button>            
        </section>
    )
}

export default About