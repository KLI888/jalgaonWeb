import React from 'react'
import './AccountCompo.css'

function MyProfile() {
  return (
    <div className="myProfile_content">
        <h1>My Profile</h1>
        <div className="user_info_form">
            <form action="">
                <div className="profile_change_img">
                    <div className="profile_img">
                    <img src="https://s3-alpha-sig.figma.com/img/0d63/5630/71ee0be67a603e99a26544662f2b5442?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PnqDJS49Wj0qtLzW47ticWWue0bzjmt8305YE9DWWCBSCiJ2kDoOmY1US3K89rJ8NzpuHarTWS-reH0LIaYKmvRtmHUn25evWzF4~ZteyXqaTiCcEoKkuLgXxuYAqNrppiu7U9FIxqmOZxwDIcN48R0jhQQiD1D0dXw6Oi8WX5KW1Vi60cUpuEKKl--~UnL5cU44r4wr9RXyjl9eJrXYvB7l4XqxrrwgTgscUySKHG3RrQPWr8j6DHTM5dXLzCDNfjckV1k4B9DnPd7Em4ZbNHkStyVa6IZbHm3qED2MZYdS1v88JZ4oN8uyMGvapbjGgjbmXfXr8o6L8MGJWLWzwQ__" alt="" />
                    </div>

                    <button type="submit">Upload</button>
                    <button type="submit">Delete</button>
                </div>
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
