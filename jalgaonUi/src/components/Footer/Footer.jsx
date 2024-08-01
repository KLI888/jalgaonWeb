import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Footer.css'
function Footer() {
  return (
    <>
        <div className="footer_container">
            <div className="footer_about">
                <div className="footer_logo">
                    <img className="icon" src={assets.icon} alt="" />
                    <img className="logo" src={assets.logo} alt="" />
                </div>
                <div className="footer_info">
                    <p>Your definitive guide to Jalgaon District! Discover local businesses, services, and attractions in this vibrant region of Maharashtra, India. From bustling markets to serene natural spots, Jalgaon.com offers comprehensive listings to explore the essence of Jalgaon and its neighboring areas.</p>
                </div>
            </div>
            <div className="footer_links">
                <h1>Useful Links</h1>
                <div className="links">
                    <ul className="links_list">
                        <Link to="/about" className="link">About</Link>
                        <a href="" className="link">Blog</a>
                        <a href="" className="link">News</a>
                        <a href="" className="link">Advertise</a>
                    </ul>    
                    <ul className="links_list">
                        <a href="" className="link">Events</a>
                        <a href="" className="link">Directory</a>
                        <a href="" className="link">NGO</a>
                        <a href="" className="link">Add Listing</a>
                    </ul>
                    <ul className="links_list">
                        <a href="" className="link">Feedback</a>
                        <a href="" className="link">Blog</a>
                        <a href="" className="link">Testimonials</a>
                        <Link to="/termsAndCondition" className="link">Terms & Conditions</Link>
                    </ul>
                </div>
            </div>
            <div className="footer_contact">
                <h1>Contact Us</h1>
                <p className="contact_address">123, Shivaji Nagar, Near Central Park, Jalgaon, Maharashtra 425001.</p>
                <p className="contact_number">Tel: +91 257 2234567</p>
                <p className="contact_mail">Mail: contact@jalgaon.in</p>
            </div>
        </div>
        <div className="footer_copyright">
            <div className="copyright_content">
                <p>Copyright © 2024. All rights reserved.</p>
                <div className="hr_line"></div>
                <div className="social_links">
                    <a href=""><i class='bx bxl-facebook-square'></i></a>
                    <a href=""><i class='bx bxl-instagram-alt'></i></a>
                    <a href=""><i class='bx bxl-twitter'></i></a>
                </div>
            </div>
        </div>
    </>   
  )
}

export default Footer
