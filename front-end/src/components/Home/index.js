import './index.css'
import Navbar from '../Navbar'
import About from '../About'
import Projects from '../Projects'
import { Element } from "react-scroll";

const Home = () => {
  return(
    <>
      <Navbar/>
      <div className='home-container'>
        <Element name="home" className="home-section">
          <section id="home" className="min-h-screen bg-blue-100 p-10">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg">Hi! I'm a full stack developer specializing in the MERN stack.</p>
          </section>
        </Element>
      </div>
      <About/>
      <Projects/>
    </>
  )
}

export default Home