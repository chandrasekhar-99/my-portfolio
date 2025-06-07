import './index.css'
import { Element } from 'react-scroll'

const Projects = () => {
  return(
    <Element name="projects" className="projects-section">
    <div className='projects-container'>
      <section id="projects" className="min-h-screen bg-yellow-100 p-10">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <ul className="list-disc pl-5 space-y-2 list-container">
            <li className='list-item'>🌟 Personal Portfolio</li>
            <li className='list-item'>🌐 Portfolio Website</li>
            <li className='list-item'>📚 Blog App</li>
            <li className='list-item'>🛒 E-Commerce Site</li>
          </ul>
      </section>
    </div>
    </Element>
  )
}

export default Projects