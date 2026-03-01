import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              K<span>T</span>
            </Link>
            <p className="footer-tagline">Aspiring Developer & Data Analyst</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="footer-social-icons">
              <a href="https://linkedin.com/in/krupa-tejaswini" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:krupatejaswini31@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Krupa Tejaswini. Built with <FaHeart className="footer-heart" /> using React.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
