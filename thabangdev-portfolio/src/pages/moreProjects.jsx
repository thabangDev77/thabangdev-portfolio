import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ProjectCard from '../components/projects/ProjectCard'
import Footer from '../components/footer/Footer'
import projectsData from '../data/projectsData';

function moreProjects() {

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
        <>
            <Navbar />
            <main>
                <section>
                    <h2>Recent Projects</h2>
                    <p>Below are some of my recent work.</p>
                    <p>Have a project you would like to discuss?</p>
                    <p><a href="#">Reach out</a> and lets make something great together</p>
                    <div>
                        {dataElements}
                    </div>
                
                </section>
            </main>
            <Footer />
        </>
    )
}

export default moreProjects