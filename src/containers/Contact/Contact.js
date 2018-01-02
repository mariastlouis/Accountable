import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css'


const Contact = ({id, firstName, lastName, party, image, website, phone, occupation, district, chamber, committees}) => {
  
  const label = (field, label) => {
    return field ? label : null;
  }
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
          <ul>

          <li> {party} </li>
         
          <li> {chamber} District {district} </li>
          </ul>
        </div>
      </div>
      <div className = "right-side-info">
        <ul>
          <li> <a href = {website}> {firstName} {lastName}'s Website </a> </li>
          <li> {label(phone, 'Phone:')} {phone} </li>
          <li> {label(occupation, 'Occuption:')} {occupation} </li>
          <li> {id} </li>

        </ul>
      </div>
    </div>
  );
};

export default Contact;