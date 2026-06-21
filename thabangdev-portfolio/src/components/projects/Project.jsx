import React from 'react'
import ProjectCard from './ProjectCard'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import projectsData from '../../data/projectsData';

function Project() {

    const dataElements = projectsData.map((project) => <ProjectCard 
        key={project.id}
        img={project.image} 
        title={project.title} 
        description={project.description}
        technologies={project.technologies}
        link={project.link}
        />
    )

    return (
        <section id='projects'  className='projects'>
            <h2 className='projects-heading'>Recent Projects</h2>
            <p>Below are some of my recent work.Check out my full <RouterLink className='font-bold' to="projects" target="_blank">Project Catalog</RouterLink>.</p>
            <p>Have a project you would like to discuss?</p>
            <p><ScrollLink to="contact-me" smooth={true} duration={500} offset={-70} className='font-bold'>Reach out</ScrollLink> and lets make something great together</p>
            <br/>
            <div className='projects-card'>
                {dataElements.slice(0, 3)}
            </div>
            <button className='more-projects-btn'><RouterLink to="projects">See More Projects</RouterLink></button>
        </section>
  )
}

export default Project