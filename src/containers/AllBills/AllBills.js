import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Check from 'react-icons/lib/fa/check';
import Card from '../../components/Card/Card.js'

export const AllBills = (props) => {

const bills = props.lawmakers.bills

const formatDate = (action, date) => {
  const newDate = new Date(date);
  const signDay = newDate.getDate();
  const signMonth = newDate.getUTCMonth()+1;
  const signYear = newDate.getFullYear();
  const formattedDate = signMonth + '/' + signDay + '/' + signYear;

  return action === 'Governor Signed' ? ' on ' + formattedDate : null;
  };


// <p> {bills[bill].billTitle} </p>
const mapBills = (bills) => {

  if(bills) {
    const billKeys = Object.keys(bills).map((bill, index) => {
    
      return (
        <div className = "card" key = {index}>
          <div className = "card-hed">
            <h3> <span className = "check-icon"> </span>
              {bills[bill].billTitleId}  </h3>
            </div>
            <div className = "bill-content">
            
              <p className = "bill-title"> {bills[bill].billTitle}</p>
              <p><span className = "label"> Session: </span> {bills[bill].session}</p>
              <p className = "latest-action"> <span className = "label"> Latest action: </span>
              {bills[bill].action.signAction}
              </p>   
            </div>
          </div>
    
    
      );
    });
  return billKeys;
  }
}

  return (
    <div>
    <Header />
    <div className = "bills-page">
     
      <div className = "card-container">
        <div className = "card-holder">  
          {mapBills(bills)}
        </div>
      </div>
    
    </div>
    </div>
  );
};


export const mapStateToProps = store => {
  return {
    lawmakers: store.bills
  };
};

export default connect(mapStateToProps, null)(AllBills);

AllBills.propTypes = {
  bills: PropTypes.object
};