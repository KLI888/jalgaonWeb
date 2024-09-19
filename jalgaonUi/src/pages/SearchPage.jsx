import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchSection from '../components/Categorysection/SearchSection';

function SearchPage() {
    const location = useLocation();
    const { searchData } = location.state || { searchData: [] };

    useEffect(() => {
        // Print searchData when it gets set
        console.log('Received searchData:', searchData);
    }, [searchData]);

    return (
        <div className="main_section">
            <SearchSection searchData={searchData} />
        </div>
    );
}

export default SearchPage;
