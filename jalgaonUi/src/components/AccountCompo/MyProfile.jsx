import React from 'react'
import './AccountCompo.css'

function MyProfile() {
  return (
    <div className="myProfile_content">
        <h1>My Profile</h1>
        <div className="user_info_form">
            <form action="">
                <div className="username_input">
                    <p>Username</p>
                    <input type="text" name='username' placeholder='@username' />
                </div>
                <div className="name_input">
                    <p>Name</p>
                    <div>
                        <input type="text" name='firstName' placeholder='@username' />
                        <input type="text" name='lastName' placeholder='@username' />
                    </div>
                </div>
                <div className="email_input">
                    <p>E-mail</p>
                    <input type="email" name="email" id="" placeholder='@email' />
                </div>
                <div className="update_btn">
                    <button type='button'>Update Profile</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default MyProfile
