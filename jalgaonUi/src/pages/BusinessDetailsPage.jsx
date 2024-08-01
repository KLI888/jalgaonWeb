import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './pageUtil.css'
import BusinessDetailsCard from '../components/Businesscompo/BusinessDetailsCard'
import CompanyWork from '../components/Businesscompo/CompanyWork'
import BusinessContact from '../components/Businesscompo/BusinessContact'
import axios from 'axios'


function BusinessDetailsPage() {
  const {productId} = useParams()
  const [businessData, setBusinessData] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('tokenKey');

    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const token = "your_token_here"; // Replace with your actual token
        const response = await axios.get("http://127.0.0.1:8000/app/business-view/", {
          params: { productId },
          headers: {
            Authorization: `Token ${token}` // Using Token authentication scheme
          }
        });
        setBusinessData(response.data);
        console.log(response.data);
        console.log("Data fetched successfully");
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [productId]);
  return (
    <div className='main_section'>
        <div className="page_location_tow"><Link to='/'>Home</Link> &gt; Search &gt; <Link to='/categories'>{businessData.main_category}</Link> &gt; <span>{businessData.business_name}</span></div>
        <BusinessDetailsCard businessData={businessData}/>
        <div className="company_contact_details">
            <CompanyWork businessData={businessData}/>
            <BusinessContact businessData={businessData}/> 
        </div>
    </div>
  )
}

export default BusinessDetailsPage
