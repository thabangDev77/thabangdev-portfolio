import React from 'react'

function ProjectCard(props) {
  return (
    <div className='project-card'>
        {/* add a relevant alt text for each projects image */}
        <img src={props.image} alt='project photo'/>
        <strong className='text-lg italic'>{props.title}</strong>
        <p>{props.description}</p>
        <p className='font-bold'>Technologies: {props.technologies.join(', ')}</p>
        <button className='view-project-btn'><a href={props.link} target="_blank" rel="noopener noreferrer">View Project</a></button>
    </div>
  )
}

export default ProjectCard