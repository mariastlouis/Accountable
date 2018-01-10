import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import { Link, withRouter} from 'react-router-dom';
import './BillDetailsPage.css';
import {selectNewLawmaker} from '../../helper/helper.js';
import * as actions from '../../actions/';


const BillDetailsPage = (props) => {
  const bill = props.bills.billSelected;
 

  const chooseLawmaker = async(id) => {
    const lawmakerData = await selectNewLawmaker(id);
    props.lawmakerClick(lawmakerData);

 }


 const sponsorMap = (sponsors, index) => {
  if (sponsors) {
    const sponsorKeys = Object.keys(sponsors).map((sponsor) =>{
      const sponsorInfo = sponsors[sponsor]
     
      return (
        <div className = "sponsor-card" key = {index}>
            <div className = "sponsor-hed">
              <h3 className = 'upper'>{sponsorInfo.chamber} district {sponsorInfo.district} </h3>
              <h3> {sponsorInfo.sponsorFirstName} {sponsorInfo.sponsorLastName} </h3>
              <p className = "sponsor-party"> {sponsorInfo.party}</p>
            </div>
            <div className = "sponsor-image">
              <img className = 'lawmaker-result-image'src = {sponsorInfo.image}  />
              <button className = "select-lawmaker-button" 
              onClick = {() => chooseLawmaker(sponsorInfo.sponsorId)}>
               <Link className = 'lawmaker-link' to = {`/lawmakers/${sponsorInfo.sponsorId}`}> 
                Learn more
               </Link>
            </button> 

            </div>
        </div>
      )
    });
    return sponsorKeys;
  }

 }


  return (
    <div className = "bill-details-page">
      <Header />
      <h1 className = 'accent-hed'> {bill.billTitleId}</h1>
        <h2 className = "secondary-hed">
          {bill.title}
        </h2>
        <div className = "bill-button">
          <a className = "bill-description-button" href = {bill.billUrl}> Full bill description </a>
          <hr className = "line-top" /> 
        </div>
        <div className = "sponsor-section">
        <h2 className = "sponsor-hed"> Bill Sponsors </h2>
        <div className = "sponsor-card-container">
          <div className = "sponsor-card-holder">
            {sponsorMap(bill.sponsors)}
          </div>
        </div>
        </div>
    </div>
  )
}


export const mapStateToProps = store => {
  return {
    bills: store.bills,
    lawmakers: store.lawmakers
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    lawmakerClick: lawmaker => {
      dispatch(actions.setClickedLawmaker(lawmaker));
    }
   
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BillDetailsPage));