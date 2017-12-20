import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

const DetailsPage = ({data}) => {
  console.log(data[0].contact)
  const mappedContact = Object.keys(data).map((dataPoint) =>{
    return (
      <Contact 
        id = {data[dataPoint].id}
        firstName = {data[dataPoint].contact.firstName}
        lastName = {data[dataPoint].contact.lastName}
        party = {data[dataPoint].contact.party}
        image = {data[dataPoint].contact.image}
        website = {data[dataPoint].contact.website}
        phone = {data[dataPoint].contact.phone}
        occupation = {data[dataPoint].contact.occupation}
        district = {data[dataPoint].contact.district}
        chamber = {data[dataPoint].contact.chamber} />
    );
  });

  return (
    <div className = "details-page">
      
        {mappedContact}
      
    </div>
  );
};

export default DetailsPage;
