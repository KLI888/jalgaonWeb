import React, { useState } from 'react'

function CompanyWork({businessData}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(null)
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = (currentRating) => {
        setHover(currentRating);
        setIsClicked(false);
    };

    const handleMouseLeave = () => {
        if (!isClicked) {
        setHover(null);
        }
    };

    const handleMouseDown = (currentRating) => {
        setRating(currentRating);
        setIsClicked(true);
    };

    return (
        <div className="companyWork">
            <div className="company_brands">
                <h1>Vehicle Brands</h1>
                <div className="brands">
                    <span>{businessData.sub_domain_one}</span>
                    <span>{businessData.sub_domain_two}</span>
                    <span>{businessData.sub_domain_three}</span>
                    <span>{businessData.sub_domain_four}</span>
                    <span>{businessData.sub_domain_five}</span>
                </div>
            </div>
            <div className="company_profile">
                <h1>Company Profile</h1>
                <div className="profile_info">
                    <div className="business_origin">
                        <p>Country of Origin</p>
                        <span>{businessData.business_origin}</span>
                    </div>
                    <div className="vr_line"></div>
                    <div className="business_estab">
                        <p>Year of Establishment</p>
                        <span>{businessData.business_dob}</span>
                    </div>
                    <div className="vr_line"></div>
                    <div className="business_gst">
                        <p>GST Number</p>
                        <span>{businessData.business_gst}</span>
                    </div>

                </div>
            </div>
            <div className="company_desc">
                <h1>Description</h1>
                <p>{businessData.business_description}</p>
            </div>
            <div className="company_photos">
                <h1>Photos</h1>
                <div className="phtos">
                    <img src={`http://127.0.0.1:8000/${businessData.business_img_one}`} alt="" />
                    <img src={`http://127.0.0.1:8000/${businessData.business_img_two}`} alt="" />
                    <img src={`http://127.0.0.1:8000/${businessData.business_img_three}`} alt="" />
                </div>
            </div>
            <div className="company_reviw">
                <h1>Add Your Review</h1>
                <div className="rating_star">
                    <span>{rating}</span>
                    {[...Array(5)].map((star, index) => {
                        const currentRating = index + 1
                        return (
                            <label key={index} htmlFor="">
                                <input type="radio" onClick={() => {
                                    setRating(currentRating)
                                }} value={currentRating} name='rating' />
                                <i
                                    
                                    className={`bx bxs-star ${currentRating <= (hover || rating) ? 'star_fill' : ''}`}
                                    onMouseEnter={() => handleMouseEnter(currentRating)}
                                    onMouseDown={() => handleMouseDown(currentRating)}
                                    onMouseLeave={handleMouseLeave}>
                                </i>
                            </label>
                        )
                    })}
                </div>
                <div className="review_form">
                    <form action="">
                        <input type="hidden" value={rating} />
                        <textarea name="" id="" placeholder='Write a review....'></textarea><br />
                        <input className='review_btn' type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
            <div className="review_data">
                <h1>Review (3)</h1>
                <div className="review_rating_star">
                    <span>4</span>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                </div>
                <div className="user_review_card">
                    <div className="review_name">
                        <p>Sanket Satghar</p>
                        <div className="user_review_star">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                    <div className="user_review">
                        <p>S.K. Auto offers excellent service and quality parts. The staff is knowledgeable and friendly, ensuring a smooth and efficient experience. Highly recommend for all your automotive needs!</p>
                    </div>
                    <div className="review_date">
                        <p>-10 July 2024</p>
                    </div>
                </div>
                <div className="user_review_card">
                    <div className="review_name">
                        <p>Pavan Shimpi</p>
                        <div className="user_review_star">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                    <div className="user_review">
                        <p>S.K. Auto offers excellent service and quality parts. The staff is knowledgeable and friendly, ensuring a smooth and efficient experience. Highly recommend for all your automotive needs!</p>
                    </div>
                    <div className="review_date">
                        <p>-10 July 2024</p>
                    </div>
                </div>
                <div className="user_review_card">
                    <div className="review_name">
                        <p>Yash Patil</p>
                        <div className="user_review_star">
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </div>
                    </div>
                    <div className="user_review">
                        <p>S.K. Auto offers excellent service and quality parts. The staff is knowledgeable and friendly, ensuring a smooth and efficient experience. Highly recommend for all your automotive needs!</p>
                    </div>
                    <div className="review_date">
                        <p>-10 July 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyWork
