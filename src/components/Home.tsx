import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Noah Rinehart</h1>
          <p className="hero-subtitle">Full Stack Developer | Problem Solver | Life-long Learner</p>
          <div className="hero-cta">
            <Link to="/skills" className="btn btn-primary">View My Skills</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About Me</h2>
          <p className="about-text">
            I'm a passionate developer with a love for creating elegant solutions to complex problems. 
            When I'm not coding, you can find me exploring new technologies, contributing to open source, 
            or enjoying life's adventures.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home