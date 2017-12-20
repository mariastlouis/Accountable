import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

const DetailsPage = ({data}) => {
  // let dataKeys = Object.keys(data);
  const mappedContact = Object.keys(data).map((dataPoint) =>{
    return (
      <Contact 
        firstName = {data[dataPoint].firstName}
        lastName = {data[dataPoint].lastName}/>
    );
  });

  return (
    <div className = "details-page">
      
        {mappedContact}
      
    </div>
  );
};

export default DetailsPage;
