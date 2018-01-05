import React from 'react';
import PropTypes from 'prop-types';
import './BillDetail.css'
import Card, { CardActions, CardBlock, CardDivider, CardFooter, CardImage, CardTitle } from 'mineral-ui/Card';

const BillDetail = ({bills}) => {

const signed = (action) => {
  return action === 'Governor Signed' ? 'Signed by Governor' : null;
}

const formatDate = (action, date) => {
  const newDate = new Date(date)
  const signDay = newDate.getDate();
  const signMonth = newDate.getUTCMonth()+1;
  const signYear = newDate.getFullYear();
  const formattedDate = signMonth + '/' + signDay + '/' + signYear

  return action === 'Governor Signed' ? ' on ' + formattedDate : null
}





const mapBills = (bills) => {
  if(bills) {
    const billKeys = Object.keys(bills).map((bill) => {
     
      return (
          <div>
                           <p><strong>{bills[bill].billTitleId}</strong></p>
           <p>{bills[bill].billTitle}</p>
           <p><em>{signed(bills[bill].signed.signAction)}
            {formatDate(bills[bill].signed.signAction, bills[bill].signed.signDate)} </em></p>   
            </div>


       
        
      )
    });
    return billKeys;
  }
}


  return (
    <div className = "bill-detail">
      <h2> Sponsored Bills </h2>
     
      {mapBills(bills)}
     
    </div>
  )

}

export default BillDetail;