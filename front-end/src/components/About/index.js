import './index.css'
import Navbar from '../Navbar'
import Skills from '../Skills'
import Projects from '../Projects'
import { Element, Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";




const About = () => {
  const linkedinUrl = process.env.REACT_APP_LINKEDIN_PROFILE_URL
  const githubUrl = process.env.REACT_APP_GITHUB_PROFILE_URL
  const resumeUrl = process.env.REACT_APP_RESUME_URL

  return(
    <>
      <Navbar/>
        <Element name="about" className="about-container">
          <section id="about" className="about-section">
              <p className="about-description">Hi! I'm</p>
              <h1 className="about-heading"> Chandra Sekhar Sathavalli</h1>
              <p className="about-description-2">Aspiring full-stack developer specializing in the <span className="span-highlight">MERN stack</span>, with a passion for building creative, user-friendly applications. Actively learning and expanding my technical skills.</p>
              <div className="about-social-container">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="about-icons"/>
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="about-icons"/>
                </a>
                <a
                  href={resumeUrl}
                  className="resume-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Resume</span>
                  <FaExternalLinkAlt className="resume-icon" />
                </a>
              </div>
          </section>
          <Link to="skills" spy={true} offset={-90} smooth={true} duration={600} className="about-scroll-link">
           <MdKeyboardArrowDown className="about-scroll-icon" />
          </Link>
        </Element>
      <Skills/>
      <Projects/>
    </>
  )
}

export default About