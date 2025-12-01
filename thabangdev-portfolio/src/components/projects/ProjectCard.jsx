import React from 'react'
import projectImage from '../../assets/images/project.jpg'

function ProjectCard() {
  return (
    <div className='flex flex-col justify-center items-center gap-1 border-2 rounded-xl p-1'>
        <img src={projectImage} alt='project photo' style={{ width: '100%', height: 'auto', borderRadius: '10px'}} />
        <strong className='text-lg italic '>Project Name</strong>
        <p className='text-sm'>Projects description</p>
        <button className='text-sm font-bold border rounded-3xl p-2 m-2'>View Project</button>
    </div>
  )
}

export default ProjectCard