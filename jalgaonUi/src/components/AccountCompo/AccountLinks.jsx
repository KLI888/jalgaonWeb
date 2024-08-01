import React, { useState } from 'react'
import './AccountCompo.css'
function AccountLinks({activeLink, setActiveLink}) {
  const [profileLinks, setShowProfinks] = useState(false)
  return (
    <div className={`account_links_content ${profileLinks == true ? 'show_profileLinks' : ''}`}>
        <ul>
            <li onClick={()=> setActiveLink('myProfile')} className={`${activeLink == 'myProfile' ? 'active' : ''}`}><i class='bx bx-user-circle'></i><p>My Profile</p></li>
            <li onClick={()=> setActiveLink('likedPages')} className={`${activeLink == 'likedPages' ? 'active' : ''}`}><i class='bx bx-heart'></i><p>Liked Pages</p></li>
            <li onClick={()=> setActiveLink('listinges')} className={`${activeLink == 'listinges' ? 'active' : ''}`}><i class='bx bx-notepad'></i><p>Listings</p></li>
            <li onClick={()=> setActiveLink('logout')} className={`${activeLink == 'logout' ? 'active' : ''}`}><i class='bx bxs-user-x'></i><p>Log Out</p></li>
        </ul>
        <div className="slide_account_link" onClick={()=> setShowProfinks(!profileLinks)}><i class='bx bxs-right-arrow'></i></div>
    </div>
  )
}

export default AccountLinks
