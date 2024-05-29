import  {useState, useEffect, useTransition} from 'react';
import { Link } from 'react-router-dom';
import CycloneModal from '../modals/signupmodal';

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
        </ul>
      </nav>
      <CycloneModal show={showModal} handleClose={handleCloseModal} />
    </header>
  );
} 

export default Header;