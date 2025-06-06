import{ useState } from 'react';
import { List, X } from "@phosphor-icons/react";
import { Link } from 'react-scroll';
import './index.css'

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

const renderDropdownMenu = () => {
  return(
    <div className="dropdown-container">
      {/* Hamburger Icon */}
      <button className="icon-button" onClick={toggleMenu}>
        {isOpen ? (
          <X size={24} weight="bold" />
        ) : (
          <List size={24} weight="bold" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#home" className="menu-item">Home</a>
          <a href="#about" className="menu-item">About</a>
          <a href="#projects" className="menu-item">Projects</a>
        </div>
      )}
    </div>
  )
}

  return(
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="home" smooth={true} duration={500}>Chandu</Link>
        <ul className='nav-links-container'>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        </ul>
        {/* <button type="button" className='nav-toggle'>
          <List size={32} className='nav-icon' />
        </button> */}
        {renderDropdownMenu()}
      </div>
    </nav>
  )
}

export default Navbar