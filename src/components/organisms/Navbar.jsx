import React, { useState, useEffect } from 'react';
import { Search, Bell, User } from 'lucide-react';
import './navbar.css';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <div className="navbar-logo">STREAMFLIX</div>
        <ul className="navbar-links">
          <li className="navbar-link active">Home</li>
          <li className="navbar-link">Movies</li>
          <li className="navbar-link">TV Shows</li>
          <li className="navbar-link">Sports</li>
          <li className="navbar-link">Kids</li>
        </ul>
      </div>
      <div className="navbar-right">
        <Search className="navbar-icon" />
        <Bell className="navbar-icon" />
        <div className="navbar-avatar">
          <User className="navbar-icon" style={{ padding: '6px', width: '20px', height: '20px' }} />
        </div>
      </div>
    </nav>
  );
}
