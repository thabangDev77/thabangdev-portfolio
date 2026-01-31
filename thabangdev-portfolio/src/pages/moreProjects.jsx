import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ProjectCard from '../components/projects/ProjectCard'
import Footer from '../components/footer/Footer'

function moreProjects() {
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
                        <ProjectCard />
                    </div>
                
                </section>
            </main>
            <Footer />
        </>
    )
}

export default moreProjects