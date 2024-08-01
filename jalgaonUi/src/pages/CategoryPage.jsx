import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filtercategory from '../components/Filtercategory/Filtercategory'
import Categorysection from '../components/Categorysection/Categorysection'
import axios from "axios"
function CategoryPage() {
  const { mainCategoryId, mainCategory } = useParams();
  const [businessData, setBusinessData] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/app/filtered-business/', {
                params: { mainCategoryId }
            });
            setBusinessData(response.data);
            console.log("data.get");
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    if (mainCategory) {
        fetchProducts();
    }
}, []);
  return (
    <div className="main_section">
      <Filtercategory mainCategoryId={mainCategoryId} mainCategory={mainCategory}/>
      <Categorysection businessData={businessData}  />
    </div>
  )
}

export default CategoryPage
