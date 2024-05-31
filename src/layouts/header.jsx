import { useState } from "react";
import { Link } from 'react-router-dom';
import CycloneModal from '../modals/signupmodal';
import DarkModeToggle from './darkmodetoggle';
import './header.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <header className="header">
      <meta name="keywords" content="React, JavaScript, semantic markup, html" />
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Weather Statistics</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleShowModal}>Cyclone</Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
        <DarkModeToggle />
      </nav>
      <CycloneModal show={showModal} handleClose={handleCloseModal} />
    </header>
  );
} 

export default Header;