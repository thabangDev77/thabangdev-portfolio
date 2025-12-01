import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <section>
      <h2>Recent Projects</h2>
      <p>Below are some of my recent work.Check out my complete <a href="#" target="_blank">portfolio</a></p>:
      <p>Have a project you would like to discuss?</p>
      <p><a href="#">Reach out</a> and lets make something great together</p>
      <br/>
      <div>
        <ProjectCard /> 
      </div>
      <button><a href="#">See More Projects</a></button>
    </section>
  )
}

export default Project