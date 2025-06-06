import './index.css'

const Projects = () => {
  return(
    <div className='projects-container'>
      <section id="projects" className="min-h-screen bg-yellow-100 p-10">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>🌐 Portfolio Website – React + Tailwind</li>
            <li>📚 Blog App – MERN Stack with authentication</li>
            <li>🛒 E-Commerce Site – React, Redux, and Stripe integration</li>
          </ul>
        </section>
    </div>
  )
}

export default Projects