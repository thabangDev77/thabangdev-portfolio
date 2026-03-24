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
      <div className='descriptions grid grid-cols-3 gap-2 my-4'>
            <article className='border-2 rounded-2xl p-2'>
                <h3 className='text-xl font-semibold text-orange-600'>Problem Solving</h3>
                <p className='mt-2'>
                    I enjoy breaking down complex problems into manageable components
                    and building logical, maintainable solutions.
                </p>
            </article>

            <article className='border-2 rounded-2xl p-2'>
                <h3 className='text-xl font-semibold text-orange-600'>Frontend Engineering</h3>
                <p className='mt-2'>
                    I focus on building clean, accessible, and responsive user
                    interfaces with modern frontend technologies.
                </p>
            </article>

            <article className='border-2 rounded-2xl p-2'>
                <h3 className='text-xl font-semibold text-orange-600'>Structured Learning</h3>
                <p className='mt-2'>
                    I continuously improve by building projects, refining fundamentals,
                    and applying best practices in real-world scenarios.
                </p>
            </article>
      </div>

      {/* Tech Stack */}
      <div>
            <h3 className='text-2xl font-semibold text-orange-600'>Tech Stack</h3>
            <ul className="icons">
                <li><FontAwesomeIcon icon={faJs} size="xl" className=""/></li>
                <li><FontAwesomeIcon icon={faHtml5} size="xl" /></li>
                <li><FontAwesomeIcon icon={faCss3} size="xl" /></li>
                <li><FontAwesomeIcon icon={faReact} size="xl" /></li>
                <li><FontAwesomeIcon icon={faPython} size="xl" /></li>
            </ul>
      </div>

      {/* Tools */}
      <div>
            <h3 className='text-2xl font-semibold text-orange-600'>Tools</h3>
            <ul className="icons">
                <li><FontAwesomeIcon icon={faGitAlt} size="xl" /></li>
                <li><FontAwesomeIcon icon={faGithub} size="xl" /></li>
            </ul>
        </div>
    </section>
  );
}

export default Expertise;
