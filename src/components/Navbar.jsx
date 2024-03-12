import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass, faBars, faHome, faUsers, faStar, faEnvelope,
  faCalendarAlt, faUserCircle, faSignOutAlt, faTimes
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [newNavBar, setNewNavBar] = useState(false);

  const toggleNavbar = () => {
    setNewNavBar(!newNavBar);
  };

  return (
    <header className="header">
      <FontAwesomeIcon
        icon={faBars}
        style={{ color: '#333', fontSize: '35px' }}
        onClick={toggleNavbar}
      />
      <h1 className="logo-text">
        <FontAwesomeIcon icon={faCompass} /> ExploreXpress
      </h1>
      <Link to="/login" className='Login'>Login</Link>
      <div className={newNavBar ? "new-navbar active" : "new-navbar"}>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ color: '#333', fontSize: '50px', position: 'absolute', top: '20px', right: '20px', cursor: 'pointer' }}
          onClick={toggleNavbar}
        />
        <ul className="new-navbar-options">
          <li><Link to="/" style={{color: 'black'}}><FontAwesomeIcon icon={faHome} style={{ fontSize: '45px', color: 'grey' }}/> Home</Link></li>
          <li><FontAwesomeIcon icon={faUsers} style={{ fontSize: '45px', color: 'skyblue' }}/> About Us</li>
          <li><FontAwesomeIcon icon={faStar} style={{ fontSize: '45px', color: 'yellow' }}/> Review</li>
          <li><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '45px', color: 'green' }}/> Contact</li>
          <li><FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: '45px', color: 'blue' }}/> My Plans</li>
          <li><FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '45px', color: 'purple' }}/> My Account</li>
          <li><FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: '45px', color: 'red' }}/> Logout</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
