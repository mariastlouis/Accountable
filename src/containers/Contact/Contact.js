import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({id, firstName, lastName, party, image, website, phone, occupation, district, chamber}) => {
  return (
    <div className = "Contact">
      <h2> {firstName} {lastName} </h2>
      <div className = "intro">
        <img className = "mugshot" src = {image} alt = {`${firstName} ${lastName}`} />
        <p> {party} </p>
        <p> District: {district} </p>
        <p> ID: {id} </p>
      </div>
      <div className = "profile">
        <ul>
          <li> <a href = {website}>Visit website </a> </li>
          <li> Phone: {phone} </li>
          <li> Occupation: {occupation} </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;