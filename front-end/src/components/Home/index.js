import './index.css'
import Navbar from '../Navbar'
import About from '../About'
import Projects from '../Projects'
import { Element } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return(
    <>
      <Navbar/>
        <Element name="home" className="home-container">
          <section id="home" className="home-section">
            <p className="home-description">Hi! I'm</p>
            <h1 className="home-heading"> Chandra Sekhar Sathavalli</h1>
            <p className="home-description">Aspiring full-stack developer specializing in the <span className="span-highlight">MERN stack.</span></p>
            <div >
              <FaGithub className="home-icons"/>
              <FaLinkedin className="home-icons"/>
            </div>
            <div className="section"></div>
          </section>
        </Element>
      <About/>
      <Projects/>
    </>
  )
}

export default Home