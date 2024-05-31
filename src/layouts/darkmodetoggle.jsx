import { useState, useEffect } from "react";
// No changes needed, the import is likely used elsewhere in the file
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="toggle-container">
     <FontAwesomeIcon icon={faSun} className="icon sun-icon" />
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <span className="slider round"></span>
      </label>
     <FontAwesomeIcon icon={faMoon} className="icon moon-icon" />
    </div>  
  );
};

export default DarkModeToggle;