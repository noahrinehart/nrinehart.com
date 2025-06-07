import './Life.css'

function Life() {
  return (
    <section className="life-events">
      <div className="container">
        <h1>Life</h1>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Started New Role</h3>
              <p>Joined an amazing team as a Senior Developer</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h3>Graduated University</h3>
              <p>Completed my Computer Science degree with honors</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3>First Internship</h3>
              <p>Gained real-world experience at a tech startup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Life