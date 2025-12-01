import React from 'react'
import aboutImage from '../../assets/images/about.jpg'

function About() {
    return (
        <section className='flex flex-col justify-center items-center gap-8 my-20 px-4'>
            <h2>About Me</h2>

            <div>
              <div>
                  <p>Hi, I'm Thabang, a dedicated student with a strong interest in full stack web development. I'm passionate about building complete web applications; from crafting responsive front-end interfaces to designing robust back-end systems. I enjoy the challenge of turning ideas into interactive digital experiences that are both functional and visually appealing.</p>
                  <br/>
                  <p>Currently, I'm focused on expanding my skills in technologies like HTML, CSS, JavaScript, Python, and Node.js, while diving deeper into frameworks like React and Express. I love learning by doing; whether it's working on personal projects, contributing to collaborative teams, or exploring open-source code to understand how real-world systems are built.</p>
                  <br/>
                  <p>As I grow in my journey as a developer, I'm excited to connect with others, learn continuously, and create impactful solutions. Whether it's a sleek portfolio site or a full-featured web app, I believe in writing clean code and building with purpose.</p>  
              </div>

              <div>
                  <img src={aboutImage} alt="about me image" style={{ width: '400px', height: '300px'}} /> 
              </div>
            </div>
            <button>Discover More About Me</button>            
        </section>
  )
}

export default About