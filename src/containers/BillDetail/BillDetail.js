import React from 'react';
import PropTypes from 'prop-types';

const BillDetail = ({bills}) => {

const signed = (action) => {
  console.log(action)
  return action === 'Governor Signed' ? 'Signed by Governor' : null;
}

const mapBills = (bills) => {
  if(bills) {
    console.log(bills)
    const billKeys = Object.keys(bills).map((bill) => {
     
      return (
        <div> 
          <li>{bills[bill].billTitleId}</li>
          <li>{bills[bill].billTitle}</li>
          <li>{signed(bills[bill].signed.signAction)}</li>
        </div>
      )
    });
    return billKeys;
  }
}


  return (
    <div className = "bill-detail">
      <h2> Sponsored Bills </h2>
      <ul>
      {mapBills(bills)}
      </ul>
    </div>
  )

}

export default BillDetail;