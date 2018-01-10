import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header.js';
import { withRouter} from 'react-router-dom';
import './BillDetailsPage.css'



const BillDetailsPage = (props) => {
  const bill = props.bills.billSelected;
  console.log('bill', bill)


  return (
    <div className = "bill-details-page">
      <Header />
      <h1 className = 'accent-hed'> {bill.billTitleId}</h1>
        <h2 className = "secondary-hed">
          {bill.title}
        </h2>
        <div className = "bill-button">
          <a className = "bill-description-button" href = {bill.billUrl}> Full bill description </a>
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


export default withRouter(connect(mapStateToProps, null)(BillDetailsPage));