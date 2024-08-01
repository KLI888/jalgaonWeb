import React, { useState, useEffect  } from 'react';
import './Advertise.css';
import axios from 'axios';
const divStyle = {
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // backgroundSize: 'cover',
  // width: '100%',
  // height: '320px',
  // position: 'relative' // Add this for positioning dots relative to the image
};



function Advertise() {
  const [sliedData, setSlideData] = useState([])
  const [slide, setSlide] = useState(0);
  const [ads, setAds] = useState([]);


  useEffect(()=> {
    axios.get('http://127.0.0.1:8000/app/crousel-ads/')
      .then(response => {
        setSlideData(response.data.ads);
      })
      .catch(error => {
        console.error('Error fetching carousel ads:', error);
      });
  }, [])

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

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % sliedData.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [sliedData.length]);


  return (
    <div className="advertise_container">
      <div className="slide_container">
        {sliedData.map((item, index) => {
          return <img key={index} src={`http://127.0.0.1:8000/${item.crousel_add_img}`} className={slide === index ? "slider_img_div" : "slider_img_div_hidden"} />;
        })}
        <span className="indicators">
          {sliedData.map((_, index)=> {
            return <button key={index} onClick={()=> setSlide(index)} className={slide === index ? "indicator indicator_active": "indicator"}></button>
          })}
        </span>
      </div>

      <div className="banner_ads">
        {ads.banner_add_home_one && (
          <img src={`http://127.0.0.1:8000${ads.banner_add_home_one}`} alt="Home Banner One" />
        )}
        {ads.banner_add_home_two && (
          <img src={`http://127.0.0.1:8000${ads.banner_add_home_two}`} alt="Home Banner Two" />
        )}
      </div>
    </div>
  );
}

export default Advertise;
