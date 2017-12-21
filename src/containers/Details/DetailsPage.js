import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const DetailsPage = (props) => {

const mapLawmakers = Object.keys(props.lawmakers).map((dataPoint) =>{
  return (
      <Contact 
        id = {props.lawmakers[dataPoint].id}
        firstName = {props.lawmakers[dataPoint].contact.firstName}
        lastName = {props.lawmakers[dataPoint].contact.lastName}
        party = {props.lawmakers[dataPoint].contact.party}
        image = {props.lawmakers[dataPoint].contact.image}
        website = {props.lawmakers[dataPoint].contact.website}
        phone = {props.lawmakers[dataPoint].contact.phone}
        occupation = {props.lawmakers[dataPoint].contact.occupation}
        district = {props.lawmakers[dataPoint].contact.district}
        chamber = {props.lawmakers[dataPoint].contact.chamber} 
        />
    )
})



// const mapLawmakers = (props) =>{
//   if (props.lawmakers) {
//   const mappedContact = Object.keys(props.lawmakers).map((dataPoint) =>{
//     return (
//       <Contact 
//         id = {props.lawmakers[dataPoint].id}
//         firstName = {props.lawmakers[dataPoint].contact.firstName}
//         lastName = {props.lawmakers[dataPoint].contact.lastName}
//         party = {data[dataPoint].contact.party}
//         image = {data[dataPoint].contact.image}
//         website = {data[dataPoint].contact.website}
//         phone = {data[dataPoint].contact.phone}
//         occupation = {data[dataPoint].contact.occupation}
//         district = {data[dataPoint].contact.district}
//         chamber = {data[dataPoint].contact.chamber} 
//         />
//     );
//   });
//   };
// }



  return (
    <div className = "details-page">
      {mapLawmakers}
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