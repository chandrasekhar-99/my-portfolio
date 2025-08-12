import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-scroll';
import "./index.css"; 

const Footer = () => {
  const linkedinUrl = process.env.REACT_APP_LINKEDIN_PROFILE_URL
  const githubUrl = process.env.REACT_APP_GITHUB_PROFILE_URL
  const gmailUrl = process.env.REACT_APP_GMAIL_URL
  const resumeUrl = process.env.REACT_APP_RESUME_URL

  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Name & Role */}
        <div className="footer-info">
          <h2>Chandu</h2>
          <p>Full Stack Developer</p>
        </div>

        {/* Links */}
        <ul className="footer-links">
          <li><Link to="about" spy={true} offset={-90} smooth={true} duration={600}>About</Link></li>
          <li><Link to="projects" spy={true} offset={-90} smooth={true} duration={600}>Projects</Link></li>
          <li><Link to="skills" spy={true} offset={-90} smooth={true} duration={600}>Skills</Link></li>
          <li><a href={resumeUrl} target="_blank" rel="noreferrer">Resume</a></li>
        </ul>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href={githubUrl} className="contact-btn" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={linkedinUrl} className="contact-btn" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${gmailUrl}`}
            className="contact-btn"
            aria-label="Contact via Email"
            rel="noopener noreferrer"
          >
            <SiGmail className="icon" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
