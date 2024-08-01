import React from 'react'
import './Search.css'
function Search() {
  return (
    <div className="nav_serach">
        <div className="select_city">
            <i class='bx bx-current-location'></i>
            <p>Select City</p>
        </div>
        <div className="main_search">
            <i class='bx bx-search'></i>
            <input type="search" name="input_business" id="input_business" className="input_business" placeholder="Search for colleges" />
        </div>
    </div>
  )
}

export default Search
