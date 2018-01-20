import React from 'react';
import PropTypes from 'prop-types';
import './BillDetail.css';
import { connect } from 'react-redux';
import Check from 'react-icons/lib/fa/check';
import { Link, withRouter } from 'react-router-dom';
import {getBillDetail} from '../../helper/helper.js';
import * as actions from '../../actions/';


const BillDetail = (props) => {


  const bills = props.bills;

  const signed = (action) => {
    return action === 'Governor Signed' ? 'Signed by Governor' : null;
  };

  const checked = (action) => {
    return action === 'Governor Signed' ? <Check /> : null;
  };

  const formatDate = (action, date) => {
    const newDate = new Date(date);
    const signDay = newDate.getDate();
    const signMonth = newDate.getUTCMonth()+1;
    const signYear = newDate.getFullYear();
    const formattedDate = signMonth + '/' + signDay + '/' + signYear;

    return action === 'Governor Signed' ? ' on ' + formattedDate : null;
  };


  const chooseBill = async(billId) => {
    const billData = await getBillDetail(billId);
    props.billClick(billData); 
  };


  const mapBills = (bills) => {
    if (bills) {
   
      const billKeys = Object.keys(bills).map((bill, index) => {
    
        return (
          <div className = "bill-info">
            <div className = "card" key = {index}>
              <div className = "card-top-content">
                <div className = "card-hed">
                  <h3> <span className = "check-icon"> {checked(bills[bill].signed.signAction)} </span>
                    {bills[bill].billTitleId}  </h3>
                </div>
                <div className = "bill-content">
                  <div className = "bill-title-div">
                    <p className = "bill-title"> {bills[bill].billTitle}</p>
                  </div>
                  <p><span className = "label"> Session: </span> {bills[bill].session}</p>
                  <p className = "gov-signature"><em>{signed(bills[bill].signed.signAction)}
                    {formatDate(bills[bill].signed.signAction, 
                      bills[bill].signed.signDate)} </em></p>   
                </div>
              </div>
              <div className = "card-footer">
                <button className = "get-bill-button" 
                  onClick = {() => chooseBill(bills[bill].billId)}>
                  <Link className = 'bill-link' to = {`/bills/${bills[bill].billId}`}> 
                  Learn more
                  </Link>
                </button> 
              </div>
            </div>

          </div>
        );
      });
      return billKeys;
    }
  };


  return (
    <div className = "bill-detail">

      <div className = "bill-hed">
        <h2 className = "bill-hed"> Sponsored Bills </h2>
        
      </div>
      <div className = "check-description">
        <p className = "check-paragraph">
          <span className = "check-hed"><Check /> </span>
          = Bills signed by governor </p>
      </div>
      <div className = "card-container">
        <div className = "card-holder">  
          {mapBills(bills)}
        </div>
      </div>
    </div>
  );

};

export const mapDispatchToProps = dispatch => {
  return {
    billClick: bill => {
      dispatch(actions.setClickedBill(bill));
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(BillDetail));

BillDetail.propTypes = {
  bills: PropTypes.array
};