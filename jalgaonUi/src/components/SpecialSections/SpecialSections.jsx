import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './SpecialSections.css';
import { FormContext } from '../../context/FormContext';
function SpecialSections() {
  const { closeSpecial } = useContext(FormContext)

  return (
    <>
      <div className="special_section">
        <div className="special_section_btns">
          <a href='https://jalgaon.gov.in/public-utility-category/ngos/' target='_blank'>
            <div className="special_btn btn_ngo">NGO</div>
          </a>
          <a href='https://jalgaon.gov.in/telephone/' target='_blank'>
            <div className="special_btn btn_directory">Directory</div>
          </a>
          <a href=' https://jalgaon.gov.in/tourist-places/' target='_blank'>
            <div className="special_btn btn_freeList">Tourist places</div>
          </a>
          <Link to='/'>
            <div className="special_btn btn_events">Events</div>
          </Link>
        </div>
      </div>

      {/* special_section_two */}
      <div className={`special_section_two ${closeSpecial ? '' : 'active'}`}>
        <div className="sepcial_section_btns_two">
          <ul>
            <a href='https://jalgaon.gov.in/public-utility-category/ngos/' target='_blank'>
              <div className="special_btn_two btn_ngo">NGO</div>
            </a>
            <a href='https://jalgaon.gov.in/telephone/' target='_blank'>
              <div className="special_btn_two btn_directory">Directory</div>
            </a>
            <a href=' https://jalgaon.gov.in/tourist-places/' target='_blank'>
              <div className="special_btn_two btn_freeList">Tourist places</div>
            </a>
            <Link to='/'>
              <div className="special_btn_two btn_events">Events</div>
            </Link>
          </ul>
        </div>
      </div>
    </>

  );
}

export default SpecialSections;
