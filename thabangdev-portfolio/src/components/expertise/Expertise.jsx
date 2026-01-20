import React from "react";

function Expertise() {
  return (
    <section id="expertise">
        <h2>Expertise</h2>
        <p>
          With a solid foundation in data structures and algorithms, I approach
          challenges with a structured mindset. My growing proficiency in
          JavaScript, HTML, and CSS has enabled me to build dynamic and
          responsive web applications; and has further led me Learn more about Front-End Development.
        </p>

      {/* Expertise Pillars */}
      <div>
        <article>
          <h3>Problem Solving</h3>
          <p>
            I enjoy breaking down complex problems into manageable components
            and building logical, maintainable solutions.
          </p>
        </article>

        <article>
          <h3>Frontend Engineering</h3>
          <p>
            I focus on building clean, accessible, and responsive user
            interfaces with modern frontend technologies.
          </p>
        </article>

        <article>
          <h3>Structured Learning</h3>
          <p>
            I continuously improve by building projects, refining fundamentals,
            and applying best practices in real-world scenarios.
          </p>
        </article>
      </div>

      {/* Tech Stack */}
      <div>
        <h3>Tech Stack</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>Python</li>
        </ul>
      </div>

      {/* Tools */}
      <div>
        <h3>Tools</h3>
        <ul>
          <li>Git & GitHub</li>
          <li>VS Code</li>
          <li>Vite</li>
          <li>Qt</li>
        </ul>
      </div>
    </section>
  );
}

export default Expertise;
