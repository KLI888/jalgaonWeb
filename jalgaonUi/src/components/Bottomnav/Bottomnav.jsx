import React, { useState } from 'react';
import './Bottomnav.css';
import { Link } from 'react-router-dom';

function Bottomnav() {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="bottom_nav">
      <div className="bottom_nav_links">
        <a
          href="#"
          className={`bottom_nav_links ${activeLink === 'home' ? 'active' : ''}`}
          onClick={() => handleLinkClick('home')}
        >
          <i className='bx bx-home'></i>
          <p>Home</p>
        </a>
        <Link
          to="/categories"
          className={`bottom_nav_links ${activeLink === 'directory' ? 'active' : ''}`}
          onClick={() => handleLinkClick('directory')}
        >
          <i className='bx bx-folder'></i>
          <p>Directory</p>
        </Link>
        <a
          href="#"
          className={`bottom_nav_links ${activeLink === 'add_listing' ? 'active' : ''}`}
          onClick={() => handleLinkClick('add_listing')}
        >
          <i className='bx bx-plus-circle'></i>
          <p>Add Listing</p>
        </a>
        <a
          href="#"
          className={`bottom_nav_links ${activeLink === 'events' ? 'active' : ''}`}
          onClick={() => handleLinkClick('events')}
        >
          <i className='bx bx-calendar'></i>
          <p>Events</p>
        </a>
        <Link
          to="/account"
          className={`bottom_nav_links ${activeLink === 'account' ? 'active' : ''}`}
          onClick={() => handleLinkClick('account')}
        >
          <i className='bx bx-user-circle'></i>
          <p>Account</p>
        </Link>
      </div>
    </div>
  );
}

export default Bottomnav;
