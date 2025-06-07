import './index.css'
import Navbar from '../Navbar'
import About from '../About'
import Projects from '../Projects'
import { Element } from "react-scroll";

const Home = () => {
  return(
    <>
      <Navbar/>
        <Element name="home" className="home-container">
          <section id="home" className="min-h-screen bg-blue-100 p-10">
            <h1 className="text-4xl font-bold mb-4 home-heading">Welcome to My Portfolio</h1>
            <p className="text-lg home-description">Hi! I'm a full stack developer specializing in the MERN stack.</p>
          </section>
        </Element>
      <About/>
      <Projects/>
    </>
  )
}

export default Home