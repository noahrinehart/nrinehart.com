import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Skills from './components/Skills'
import Career from './components/Career'
import Life from './components/Life.tsx'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              <img src="/favicon.svg" alt="Logo" className="nav-logo-icon" />
              Noah Rinehart
            </Link>
            <ul className="nav-menu">
              <li><NavLink to="/" className="nav-link">Home</NavLink></li>
              <li><NavLink to="/skills" className="nav-link">Skills</NavLink></li>
              <li><NavLink to="/career" className="nav-link">Career</NavLink></li>
              <li><NavLink to="/life" className="nav-link">Life</NavLink></li>
              <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/career" element={<Career />} />
          <Route path="/life" element={<Life />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
