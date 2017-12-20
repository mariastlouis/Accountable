import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({firstName, lastName, party, image, website, phone, occupation, district, chamber}) => {
  return (
    <div className = "Contact">
      <h1> {firstName} {lastName} </h1>
      <img className = "mugshot" src = {image} alt = {`${firstName} ${lastName}`} />
    </div>
  );
};

export default Contact;