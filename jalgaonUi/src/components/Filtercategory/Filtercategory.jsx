import React, { useEffect, useState } from 'react';
import './Filtercategory.css'
import axios from 'axios';
function Filtercategory({ mainCategoryId, mainCategory }) {
    const [subCategories, setSubCategories] = useState([]);

    useEffect(()=>{
        if (mainCategory) {
            axios.get('http://127.0.0.1:8000/app/subCategorys/')
              .then(sub_response => {
                const filteredSubCategories = sub_response.data.categories.filter(
                  subCategory => subCategory.main_category === mainCategory
                );
                setSubCategories(filteredSubCategories);
              })
              .catch(error => {
                console.error('Error fetching sub-categories:', error);
              });
          }
    }, [])
    return (
        <div className="filter_category">
            <div className="filter_btn">
                <i class='bx bxs-filter-alt'></i>            
                <p>Filters</p>
            </div>
            <div className="filter_category_content">


                {subCategories.map(category=>(
                <div className="category_card">
                    <img src={`http://127.0.0.1:8000/${category.sub_category_img}`} alt="" />
                    <p>{category.sub_category}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Filtercategory
