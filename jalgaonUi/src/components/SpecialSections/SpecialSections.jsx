import React from 'react';
import { Link } from 'react-router-dom';
import './SpecialSections.css';

function SpecialSections() {
  return (
    <div className="special_section">
      <div className="special_section_btns">
        <Link to='/'>
          <div className="special_btn btn_ngo">NGO</div>
        </Link>
        <Link to='/'>
          <div className="special_btn btn_directory">Directory</div>
        </Link>
        <Link to='/'>
          <div className="special_btn btn_freeList">Free Listing</div>
        </Link>
        <Link to='/'>
          <div className="special_btn btn_events">Events</div>
        </Link>
      </div>
    </div>
  );
}

export default SpecialSections;
