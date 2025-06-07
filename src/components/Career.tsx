import './Career.css'

function Career() {
  return (
    <div className="career">
      <div className="container">
        <h1 className="career-title">My Career Journey</h1>
        <p className="career-intro">
          Here's an overview of my professional experience and career milestones.
        </p>

        <div className="career-timeline">
          <div className="career-item">
            <div className="career-date">2024 - Present</div>
            <div className="career-content">
              <h3>Senior Full Stack Developer</h3>
              <p className="company">Current Company</p>
              <p className="description">
                Leading development of web applications using React, TypeScript, and Node.js. 
                Collaborating with cross-functional teams to deliver high-quality software solutions.
              </p>
            </div>
          </div>

          <div className="career-item">
            <div className="career-date">2022 - 2024</div>
            <div className="career-content">
              <h3>Full Stack Developer</h3>
              <p className="company">Previous Company</p>
              <p className="description">
                Developed and maintained web applications, implemented new features, 
                and optimized performance across the full technology stack.
              </p>
            </div>
          </div>

          <div className="career-item">
            <div className="career-date">2020 - 2022</div>
            <div className="career-content">
              <h3>Junior Developer</h3>
              <p className="company">First Company</p>
              <p className="description">
                Started my professional journey, learning best practices and 
                contributing to various projects while building foundational skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career