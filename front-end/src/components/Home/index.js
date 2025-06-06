import './index.css'
import Navbar from '../Navbar'
import About from '../About'
import Projects from '../Projects'

const Home = () => {
  return(
    <>
      <Navbar/>
      <div className='home-container'>
        <section id="home" className="min-h-screen bg-blue-100 p-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg">Hi! I'm a full stack developer specializing in the MERN stack.</p>
        </section>
      </div>
      <About/>
      <Projects/>
    </>
  )
}

export default Home