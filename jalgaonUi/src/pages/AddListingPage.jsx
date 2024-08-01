import React from 'react'
import AddListingForm from '../components/AllForms/AddListingForm'

function AddListingPage() {
    
  const mainCategoryOptions = [
    { main_category: 'Education' },
    { main_category: 'Health' },
    { main_category: 'Business' }
  ];
  
  const subCategories = {
    'Education': [
      { id: '1', text: 'Primary School' },
      { id: '2', text: 'High School' },
      { id: '3', text: 'College' }
    ],
    'Health': [
      { id: '4', text: 'Hospitals' },
      { id: '5', text: 'Clinics' },
      { id: '6', text: 'Pharmacies' }
    ],
    'Business': [
      { id: '7', text: 'Retail' },
      { id: '8', text: 'Wholesale' },
      { id: '9', text: 'Services' }
    ]
  };
  
  const surveyOfficers = [
    { surver_officer_id: 'Officer1' },
    { surver_officer_id: 'Officer2' },
    { surver_officer_id: 'Officer3' }
  ];


  return (
    <div className="main_section">
        <AddListingForm/>
    </div>
  )
}

export default AddListingPage
