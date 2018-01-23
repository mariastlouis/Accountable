import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Committees from '../Committees/Committees';
import { withRouter} from 'react-router-dom';
import * as actions from '../../actions/';
import BillDetail from '../BillDetail/BillDetail';
import Header from '../Header/Header';
import {selectNewLawmaker} from '../../helper/helper.js';

export const DetailsPage = (props) => {

 
  const setLawmakerRoute = async() => {
    const idArray = Object.values(props.match.params);
    const lawmakerId = idArray[0];
    const lawmakerData = await selectNewLawmaker(lawmakerId);
    props.lawmakerSelect(lawmakerData);
  };


  const getLawmaker = () => {


    const toMap = props.lawmakers.isSelected.contact || {};
    

    return (

      <div className = "details">
     
        <Header />
      
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
          email = {toMap.email}
        />

        
        <Committees
          committees = {props.lawmakers.isSelected.committees} />
        <BillDetail 
          bills = {props.lawmakers.isSelected.bills} />
         

      </div>

    );
  };

window.scrollTo(0, 0);

  return (
    <div className = "details-page">
    
      {getLawmaker()}
  
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  lawmakerSelect: lawmaker => dispatch(actions.setSelectLawmaker(lawmaker))

});

export const mapStateToProps = store => {
  return {
    lawmakers: store.lawmakers
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsPage));

DetailsPage.propTypes = {
  lawmakers: PropTypes.object
};