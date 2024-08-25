import React, { useContext, useState } from 'react';
import './Bottomnav.css';
import { Link, NavLink } from 'react-router-dom';
import { FormContext } from '../../context/FormContext';
import { UserContext } from '../../context/UserContext';

function Bottomnav() {
  const [activeLink, setActiveLink] = useState('home');
  const { closeForm, setCloseForm } = useContext(FormContext);
  const { user, setUser } = useContext(UserContext);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="bottom_nav">
      <div className="bottom_nav_links">
        <NavLink
          to="/"
          className={`bottom_nav_links ${activeLink === 'home' ? 'active' : ''}`}
          onClick={() => handleLinkClick('home')}
        >
          <i className='bx bx-home'></i>
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/advertise"
          className={`bottom_nav_links ${activeLink === 'directory' ? 'active' : ''}`}
          onClick={() => handleLinkClick('directory')}
        >
          <i className='bx bxs-business'></i>
          <p>Advertise</p>
        </NavLink>
        <NavLink
          to="/addListig"
          className={`bottom_nav_links ${activeLink === 'add_listing' ? 'active' : ''}`}
          onClick={() => handleLinkClick('add_listing')}
        >
          <i className='bx bx-plus-circle'></i>
          <p>Add Listing</p>
        </NavLink>
        <NavLink
          to="/"
          className={`bottom_nav_links ${activeLink === 'events' ? 'active' : ''}`}
          onClick={() => handleLinkClick('events')}
        >
          <i className='bx bx-calendar'></i>
          <p>News</p>
        </NavLink>

        {user ? (
          <>
            <NavLink
              to="/account"
              className={`bottom_nav_links ${activeLink === 'account' ? 'active' : ''}`}
              onClick={() => handleLinkClick('account')}
            >
              <i className='bx bx-user-circle'></i>
              <p>Account</p>
            </NavLink>
          </>
        ) : (
          <NavLink onClick={() => setCloseForm(!closeForm)} className="bottom_nav_links">
            <i className='bx bx-user-circle'></i>
            <p>Account</p>
          </NavLink>
        )}
        {/* <Link
          to="/account"
          className={`bottom_nav_links ${activeLink === 'account' ? 'active' : ''}`}
          onClick={() => handleLinkClick('account')}
        >
          <i className='bx bx-user-circle'></i>
          <p>Account</p>
        </Link> */}
      </div>
    </div>
  );
}

export default Bottomnav;
