import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Services.css'
import axios from 'axios';

function Services() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/app/categorys/')
            .then(response => {
                setCategories(response.data.categories);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    return (
        <div className="services_container">
            <div className="services_cards">
                {categories.map(category => (
                    <Link to={`/categories/${category.id}/${category.main_category}`}>
                    <div key={category.id} className="service">
                        <img src={`http://127.0.0.1:8000${category.category_img.category_img}`} alt={category.category_img.img_name} />
                        <p>{category.main_category}</p>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Services

