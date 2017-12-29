import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css'


const Contact = ({id, firstName, lastName, party, image, website, phone, occupation, district, chamber}) => {
  return (
    <div className = "Contact">
      <div className = "left-side-info">
        <div className = "lawmaker-name">
          <h2> {firstName} {lastName} </h2>
        </div>
        <div className = "intro">
          <div className = "mugshot-image">
            <img className = "mugshot" src = {image} alt = {`${firstName} ${lastName}`} />
          </div>
          <p> {party} </p>
          <p> District: {district} </p>
          <p> ID: {id} </p>
        </div>
      </div>
      <div className = "right-side-info">
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