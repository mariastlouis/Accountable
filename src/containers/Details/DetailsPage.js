import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';

const DetailsPage = ({data}) => {
  const mappedContact = data.map((dataPoint) =>{
    return (
      <li> {dataPoint.firstName} </li>
    );
  });
console.log(data)
  return (
    <div className = "details-page">
      <ul>
        {mappedContact}
      </ul>
    </div>
  );
};

export default DetailsPage;
