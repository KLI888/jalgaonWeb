import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import BusinessCard from '../Categorysection/BusinessCard';
import { UserContext } from '../../context/UserContext';

function Listingspage() {
  const { user } = useContext(UserContext);
  const [listedPosts, setListedPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    console.log("Token:", token);
    console.log("User ID:", user.id);

    if (!token) {
      console.error('No token found in localStorage');
      return;
    }

    const fetchLikedShops = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/app/likedShops/', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          params: {
            user_id: user.id,
          },
        });

        console.log(response.data);
        setListedPosts(response.data);
      } catch (error) {
        console.error('Error fetching liked shops:', error.response ? error.response.data : error.message);
      }
    };

    fetchLikedShops();
  }, [user]);

  return (
    <div className="listingPage_content">
      {listedPosts.length === 0 ? (
        <p>No listed shops found.</p>
      ) : (
        listedPosts.map((listedShop) => (
          listedShop.user === user.id ? (
            <BusinessCard key={listedShop.shop_listing.id} businessData={listedShop.shop_listing} is_like={true} />
          ) : null
        ))
      )}
    </div>
  );
}

export default Listingspage;
