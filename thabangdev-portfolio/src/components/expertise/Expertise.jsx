import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faReact, faHtml5, faCss3, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';

function Expertise() {
  return (
    <section id="expertise" className='flex flex-col justify-center items-center gap-2 my-20 px-4'>
        <h2 className='expertise-heading'>Expertise</h2>
        <p>
          With a solid foundation in data structures and algorithms, I approach
          challenges with a structured mindset. My growing proficiency in
          JavaScript, HTML, and CSS has enabled me to build dynamic and
          responsive web applications; and has further led me Learn more about Full-Stack Development.
        </p>

      {/* Expertise Pillars */}
      <div className='grid grid-cols-3 gap-2 my-4'>
        <article className='border-2 rounded-2xl p-2'>
          <h3 className='text-xl font-semibold'>Problem Solving</h3>
          <p className='mt-2'>
            I enjoy breaking down complex problems into manageable components
            and building logical, maintainable solutions.
          </p>
        </article>

        <article className='border-2 rounded-2xl p-2'>
          <h3 className='text-xl font-semibold'>Frontend Engineering</h3>
          <p className='mt-2'>
            I focus on building clean, accessible, and responsive user
            interfaces with modern frontend technologies.
          </p>
        </article>

        <article className='border-2 rounded-2xl p-2'>
          <h3 className='text-xl font-semibold'>Structured Learning</h3>
          <p className='mt-2'>
            I continuously improve by building projects, refining fundamentals,
            and applying best practices in real-world scenarios.
          </p>
        </article>
      </div>

      {/* Tech Stack */}
      <div>
        <h3>Tech Stack</h3>
        <div>
            <FontAwesomeIcon icon={faJs} size="xl" />
            <FontAwesomeIcon icon={faHtml5} size="xl" />
            <FontAwesomeIcon icon={faCss3} size="xl" />
            <FontAwesomeIcon icon={faReact} size="xl" />
            <FontAwesomeIcon icon={faPython} size="xl" />
        </div>
      </div>

      {/* Tools */}
      <div>
        <h3>Tools</h3>
        <div>
        <FontAwesomeIcon icon={faGitAlt} size="xl" />
        <FontAwesomeIcon icon={faGithub} size="xl" />
        </div>
      </div>
    </section>
  );
}

export default Expertise;
