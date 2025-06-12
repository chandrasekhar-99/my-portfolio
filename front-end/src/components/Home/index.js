import './index.css'
import Navbar from '../Navbar'
import About from '../About'
import Projects from '../Projects'
import { Element, Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Home = () => {
  return(
    <>
      <Navbar/>
        <Element name="home" className="home-container">
          <section id="home" className="home-section">
              <p className="home-description">Hi! I'm</p>
              <h1 className="home-heading"> Chandra Sekhar Sathavalli</h1>
              <p className="home-description-2">Aspiring full-stack developer specializing in the <span className="span-highlight">MERN stack</span>, with a passion for building creative, user-friendly applications. Actively learning and expanding my technical skills.</p>
              <div >
                <FaGithub className="home-icons"/>
                <FaLinkedin className="home-icons"/>
              </div>
          </section>
          <Link to="about" spy={true} offset={-90} smooth={true} duration={600} className="home-scroll-link">
           <MdKeyboardArrowDown className="home-scroll-icon" />
          </Link>
        </Element>
      <About/>
      <Projects/>
    </>
  )
}

export default Home