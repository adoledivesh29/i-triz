import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <span className="logo-text">
            <span>BRIGHT</span> ACADEMY
          </span>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#teachers" onClick={() => setIsMenuOpen(false)}>Teachers</a></li>
          <li><a href="#subjects" onClick={() => setIsMenuOpen(false)}>Subjects</a></li>
          <li><a href="#classes" onClick={() => setIsMenuOpen(false)}>Classes</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <button className="btn btn-primary join-btn">Join Now</button>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
