import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({firstName, lastName}) => {
  return (
    <div className = "Contact">
    <h1> {firstName} {lastName} </h1>
    </div>
  );
};

export default Contact;