import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Committees from '../Committees/Committees';
import BillDetail from '../BillDetail/BillDetail';
import Header from '../Header/Header'

export const DetailsPage = (props) => {

let info = props.lawmakers

const getLawmaker = () => {

  const toMap = props.lawmakers.isSelected.contact || {}
    
    return (
      <div className = "details">

      <Header />
      
      { toMap &&

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

      }
        <Committees
          committees = {props.lawmakers.isSelected.committees} />
        <BillDetail 
          bills = {props.lawmakers.isSelected.bills} />
      </div>
    )
}



  return (
    <div className = "details-page">
     {getLawmaker()}
    </div>
  );
};


export const mapStateToProps = store => {
  return {
    lawmakers: store.lawmakers
  }
};

export default connect(mapStateToProps, null)(DetailsPage);
// export default DetailsPage