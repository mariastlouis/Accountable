import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Committees from '../Committees/Committees'

export const DetailsPage = (props) => {
let info = props.lawmakers
console.log(info)



const getLawmaker = () => {

  const toMap = props.lawmakers.isSelected.contact || {}
    return (
      <div className = "details">
         <Contact 
        id = {props.lawmakers.isSelected.id} 
        firstName = {toMap.firstName}
        lastName = {toMap.lastName}
        party = {toMap.party}
        image = {toMap.image}
        website = {toMap.website}
        phone = {toMap.phone}
        occupation = {toMap.occupation}
        district = {toMap.district}
        chamber = {toMap.chamber}
        />
        <Committees
          committees = {props.lawmakers.isSelected.committees} />
      </div>
    )
}



  return (
    <div className = "details-page">
     {getLawmaker()}
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