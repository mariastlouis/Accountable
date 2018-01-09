import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';

export const AllBills = (props) => {

const bills = props.lawmakers.bills


const mapBills = (bills) => {

  if(bills) {
    const billKeys = Object.keys(bills).map((bill) => {
      return (
     
     <p> {bills[bill].billTitle} </p>
    
      )
    })
  return billKeys;
  }
}

  return (
    <div>
    <Header />
    <div className = "details-page">
     
      {mapBills(bills)}
    
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