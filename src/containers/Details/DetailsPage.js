import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const DetailsPage = (props) => {
console.log('props', props)
  // const mappedContact = Object.keys(data).map((dataPoint) =>{
  //   return (
  //     <Contact 
  //       id = {data[dataPoint].id}
  //       firstName = {data[dataPoint].contact.firstName}
  //       lastName = {data[dataPoint].contact.lastName}
  //       party = {data[dataPoint].contact.party}
  //       image = {data[dataPoint].contact.image}
  //       website = {data[dataPoint].contact.website}
  //       phone = {data[dataPoint].contact.phone}
  //       occupation = {data[dataPoint].contact.occupation}
  //       district = {data[dataPoint].contact.district}
  //       chamber = {data[dataPoint].contact.chamber} />
  //   );
  // });

  return (
    <div className = "details-page">
       details page
    </div>
  );
};

// export default DetailsPage;

export const mapStateToProps = store => {
  return {
    lawmakers: store.lawmakers
  }
};

export default connect(mapStateToProps, null)(DetailsPage);
// export default DetailsPage