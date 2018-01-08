import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

/*eslint-disable */
const Contact = ({firstName, lastName, party, image, website, phone, occupation, district, chamber}) => {
/*eslint-enable */ 

  const label = (field, label) => {
    return field ? label : null;
  };
  return (

    <div className = "Contact">
      <h1 className = 'accent-hed'> {chamber} District {district}</h1>
     
      <div className = "main-contact-content">
        <div className = "lawmaker-profile">
          <div className = "left-side-info">
            <img className = "mugshot" src = {image} alt = {`${firstName} ${lastName}`} />
          </div>
          <div className = "right-side-info">
            <div className = "lawmaker-name">
              <h2 className = 'secondary-hed'> {firstName} {lastName} </h2>
            </div>
        
            <p> <span className = "label">{label(party, 'Party:')}</span> {party}</p>
         
            <p> <span className = "label"> {label(party, 'Website:')} </span>
              <a href = {website}> {firstName} {lastName}'s Website </a> </p>
            <p> <span className = "label">{label(phone, 'Phone:')} </span> {phone} </p>
            <p> <span className = "label">{label(occupation, 'Occupation:')}
            </span> {occupation} </p>
         
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  party: PropTypes.string,
  image: PropTypes.string,
  website: PropTypes.string,
  phone: PropTypes.string,
  occupation: PropTypes.string,
  district: PropTypes.string,
  chamber: PropTypes.string
};