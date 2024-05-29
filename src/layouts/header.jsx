import  {useState, useEffect, useTransition} from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Weather Statistics</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Cyclone</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
} 

export default Header;