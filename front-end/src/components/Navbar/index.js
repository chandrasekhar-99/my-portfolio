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
          <Link to="about" spy={true} offset={-90} smooth={true} duration={600} className="menu-item">About</Link>
          <Link to="skills" spy={true} offset={-90} smooth={true} duration={600} className="menu-item">Skills</Link>
          <Link to="projects" spy={true} offset={-90} smooth={true} duration={600} className="menu-item">Projects</Link>
        </div>
      )}
    </div>
  )
}

  return(
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="home" spy={true} offset={-90} smooth={true} duration={600} className='nav-logo'>Chandu</Link>
        <ul className='nav-links-container'>
          <li><Link to="about" spy={true} offset={-90} smooth={true} duration={600} className="nav-list-items">About</Link></li>
          <li><Link to="skills" spy={true} offset={-90} smooth={true} duration={600} className="nav-list-items">Skills</Link></li>
          <li><Link to="projects" spy={true} offset={-90} smooth={true} duration={600} className="nav-list-items">Projects</Link></li>
        </ul>
        {renderDropdownMenu()}
      </div>
    </nav>
  )
}

export default Navbar
