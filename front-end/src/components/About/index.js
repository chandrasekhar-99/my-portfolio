import './index.css'
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about" className="about-section">
      <div className='about-container'>
        <section id="about" className="min-h-screen bg-green-100 p-10">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p>
              I'm an Electrical and Electronics Engineering graduate turned full stack web developer.
              I build responsive, scalable web apps using React, Node.js, and MongoDB.
            </p>
          </section>
      </div>
    </Element>
  )
}

export default About