import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const DetailsPage = (props) => {
let lawmaker = props.lawmakers

const mapLawmakers = Object.keys(lawmaker).map((dataPoint, index) =>{
  return (
      <Contact 
        key = {index}
        id = {lawmaker[dataPoint].id}
        firstName = {lawmaker[dataPoint].contact.firstName}
        lastName = {lawmaker[dataPoint].contact.lastName}
        party = {lawmaker[dataPoint].contact.party}
        image = {lawmaker[dataPoint].contact.image}
        website = {lawmaker[dataPoint].contact.website}
        phone = {lawmaker[dataPoint].contact.phone}
        occupation = {lawmaker[dataPoint].contact.occupation}
        district = {lawmaker[dataPoint].contact.district}
        chamber = {lawmaker[dataPoint].contact.chamber} 
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