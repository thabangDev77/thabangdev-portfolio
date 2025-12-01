import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <section  className='flex flex-col justify-center items-center gap-2 my-20 px-4'>
      <h2 className='text-4xl font-bold'>Recent Projects</h2>
      <p>Below are some of my recent work.Check out my full <a className='font-bold' href="#" target="_blank">Project Catalog</a>.</p>
      <p>Have a project you would like to discuss?</p>
      <p><a href="#" className='font-bold'>Reach out</a> and lets make something great together</p>
      <br/>
      <div className='grid grid-cols-3 m-2 gap-2'>
        <ProjectCard /> 
        <ProjectCard /> 
        <ProjectCard />
      </div>
      <button className='font-bold border-2 rounded-3xl p-2'><a href="#">See More Projects</a></button>
    </section>
  )
}

export default Project