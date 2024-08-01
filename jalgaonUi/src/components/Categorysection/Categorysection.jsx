import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom'
import './Categorysection.css'
import BusinessCard from './BusinessCard'
import axios from 'axios';
function Categorysection({businessData}) {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/app/banner-ads/')
          .then(response => {
            console.log(response.data);
            setAds(response.data);
          })
          .catch(error => {
            console.error('Error fetching banner ads:', error);
          });
      }, []);

    return (
        <div className="business_section">
            <div className="business_content">
               <div className="page_location"><Link to=''>Home</Link> &gt; Search &gt; <span>Automotive</span></div> 
               <div className="result_heading">Showing Results for <span>Automotive</span></div>
               <div className="business_cards_ads">
                <div className="business_cards">
                {businessData.map((business) => (
                    business.is_valid ? (
                      <BusinessCard key={business.id} businessData={business} is_like={false} />
                    ) : null
                ))}
                    {/* <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/>
                    <BusinessCard/> */}
                </div>
                <div className="business_ads">
                    <img src={`http://127.0.0.1:8000${ads.banner_add_category_one}`} alt="" />
                    <img src={`http://127.0.0.1:8000${ads.banner_add_category_two}`} alt="" />
                    <img src={`http://127.0.0.1:8000${ads.banner_add_category_three}`} alt="" />
                    <img src={`http://127.0.0.1:8000${ads.banner_add_category_four}`} alt="" />
                </div>
               </div>
               
            </div>
            <div className="category_ads">

            </div>
        </div>
    )
}

export default Categorysection
