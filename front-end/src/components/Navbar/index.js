
import { List } from "@phosphor-icons/react";
import './index.css'

const Navbar = () => {
  return(
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href="/">Chandu</a>
        <div className='nav-links-container'>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
        </div>
        <button type="button" className='nav-toggle'>
          <List size={32} className='nav-icon' />
        </button>
        
      </div>
    </nav>
  )
}

export default Navbar