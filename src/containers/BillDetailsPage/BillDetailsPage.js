import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import { Link, withRouter} from 'react-router-dom';
import './BillDetailsPage.css';
import {selectNewLawmaker} from '../../helper/helper.js';
import * as actions from '../../actions/';
import Check from 'react-icons/lib/fa/check';
// import Ellipsify from 'react-ellipsify';
import LinesEllipsis from 'react-lines-ellipsis';

const BillDetailsPage = (props) => {
  const bill = props.bills.billSelected;
 

  const chooseLawmaker = async(id) => {
    const lawmakerData = await selectNewLawmaker(id);
    props.lawmakerClick(lawmakerData);

  };

  const getCheck = (action) => {
    return action === 'Governor Signed' || action === 'Governor Became Law' ? <Check /> : null;
  };

  const headMessage = (action, date) => {
    let signDate = formatDate(date);
    return action === 'Governor Signed' || action === 'Governor Became Law' ? 'Signed by governor on ' + signDate  : null;
  };


  const formatDate = (date) => {
    const newDate = new Date(date);
    const signDay = newDate.getDate();
    const signMonth = newDate.getUTCMonth()+1;
    const signYear = newDate.getFullYear();
    const formattedDate = signMonth + '/' + signDay + '/' + signYear;

    return formattedDate;
  };

  const actionMap = (actions, index) => {
    if (actions) {
      const actionKeys = Object.keys(actions).map((action) => {
        const actionInfo = actions[action];
        return (
          <div className = "action-info"> 
            <p> <span className = "label"> Date: </span> {formatDate(actionInfo.date)} </p>
            <p> <span className = "label"> Action: </span> {actionInfo.action}</p>
          </div>
        );
      });
      return actionKeys;
    }
  };


  const sponsorMap = (sponsors, index) => {
    if (sponsors) {
      const sponsorKeys = Object.keys(sponsors).map((sponsor) =>{
        const sponsorInfo = sponsors[sponsor];
     
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
        );
      });
      return sponsorKeys;
    }

  };

window.scrollTo(0, 0);

  return (
    <div className = "bill-details-page">
      <Header />
      <h1 className = 'accent-hed'> {bill.billTitleId}</h1>
      <h2 className = "secondary-hed">
        {bill.title}
      </h2>
      <div className = "governor-sign-hed">
        <h2> <span className = "accent">{getCheck(bill.signAction)}</span> {headMessage(bill.signAction, bill.signDate)} </h2>
      </div>
      <div className = "bill-button">

        <LinesEllipsis
          text= {bill.summary} 
          maxLine='5'
          ellipsis= '...'
          trimRight
          basedOn='words'
        />
          
      <a className = "bill-description-button" href = {bill.billUrl}> Full bill description </a>
         
     </div>
      <div className = "sponsor-section">
        <h2 className = "sponsor-hed"> Bill Sponsors </h2>
        <div className = "sponsor-card-container">
          <div className = "sponsor-card-holder">
            {sponsorMap(bill.sponsors)}
          </div>

        </div>
        
      </div>

       
       <div className = "action-section">
        <h2 className = "action-hed"> Actions on this bill</h2>
        {actionMap(bill.allActions)}

      </div>

      
     
    </div>
  );
};


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