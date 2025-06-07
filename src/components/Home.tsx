import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Home.css'

function Home() {
  const [titleText, setTitleText] = useState('')
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showButtons, setShowButtons] = useState(false)
  const [titleComplete, setTitleComplete] = useState(false)
  
  const fullTitle = "Hi, I'm Noah Rinehart!"
  const fullSubtitle = "Full Stack Developer | Problem Solver | Life-long Learner"
  
  useEffect(() => {
    // Show subtitle and buttons immediately
    setTimeout(() => setShowSubtitle(true), 500)
    setTimeout(() => setShowButtons(true), 800)
    
    let titleIndex = 0
    const titleTimer = setInterval(() => {
      if (titleIndex < fullTitle.length) {
        setTitleText(fullTitle.slice(0, titleIndex + 1))
        titleIndex++
      } else {
        clearInterval(titleTimer)
        setTitleComplete(true)
      }
    }, 50)
    
    return () => clearInterval(titleTimer)
  }, [])
  
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title typing">{titleText}{!titleComplete && <span className="cursor">|</span>}</h1>
          <p className={`hero-subtitle ${showSubtitle ? 'show' : ''}`}>{fullSubtitle}</p>
          <div className={`hero-cta ${showButtons ? 'show' : ''}`}>
            <Link to="/skills" className="btn btn-primary">View My Skills</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home