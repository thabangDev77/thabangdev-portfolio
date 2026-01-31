import React from 'react'

function ProjectCard(props) {
  return (
    <div className='flex flex-col justify-center items-center gap-1 border-2 rounded-xl p-1'>
        <img src={props.image} alt='project photo' style={{ width: '100%', height: 'auto', borderRadius: '10px'}} />
        <strong className='text-lg italic'>{props.title}</strong>
        <p className='text-sm'>{props.description}</p>
        <p className='text-sm font-bold'>Technologies: {props.technologies.join(', ')}</p>
        <button className='text-sm font-bold border rounded-3xl p-2 m-2'><a href={props.link} target="_blank" rel="noopener noreferrer">View Project</a></button>
    </div>
  )
}

export default ProjectCard