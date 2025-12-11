import { useState } from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import './Header.css'

function Header() {

  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <h1><Link to="/" className="active" onClick={closeMenu}>LOGO</Link></h1>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          <Icon
            icon={isOpen ? 'ep:close' : 'mdi:menu'}
            className="menu-icon"
            width="40"
            height="40"
          />
        </button>


        <ul className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className="link" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="link" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/service" className="link" onClick={closeMenu}>Service</Link>
          </li>
          <li>
            <Link to="/blog" className="link" onClick={closeMenu}>Blog</Link>
          </li>
          <li>
            <Link to="/contact" className="link" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>

      
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Header;