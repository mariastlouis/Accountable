import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

const DetailsPage = ({data}) => {
  const mappedContact = Object.keys(data).map((dataPoint) =>{
    return (
      <Contact 
        firstName = {data[dataPoint].firstName}
        lastName = {data[dataPoint].lastName}
        party = {data[dataPoint].party}
        image = {data[dataPoint].image}
        website = {data[dataPoint].website}
        phone = {data[dataPoint].phone}
        occuption = {data[dataPoint].occuption}
        district = {data[dataPoint].district}
        chamber = {data[dataPoint].chamber} />
    );
  });

  return (
    <div className = "details-page">
      
        {mappedContact}
      
    </div>
  );
};

export default DetailsPage;
