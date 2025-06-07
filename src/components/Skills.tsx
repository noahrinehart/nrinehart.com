import './Skills.css'

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <h1>Professional Skills</h1>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul className="skill-list">
              <li>React / TypeScript</li>
              <li>HTML5 / CSS3</li>
              <li>JavaScript ES6+</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Python</li>
              <li>REST APIs</li>
              <li>Database Design</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Other</h3>
            <ul className="skill-list">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>Agile Methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills