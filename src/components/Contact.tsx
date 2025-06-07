import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h1>Get In Touch</h1>
        <p>I'd love to hear from you!</p>
        <div className="contact-links">
          <a href="mailto:noah@nrinehart.com" className="contact-link">Email</a>
          <a href="https://linkedin.com/in/noahrinehart" className="contact-link">LinkedIn</a>
          <a href="https://github.com/noahrinehart" className="contact-link">GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Contact