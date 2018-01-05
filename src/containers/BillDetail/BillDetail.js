import React from 'react';
import PropTypes from 'prop-types';
import './BillDetail.css'
import Card, { CardActions, CardBlock, CardDivider, CardFooter, CardImage, CardTitle } from 'mineral-ui/Card';
import Check from 'react-icons/lib/fa/check'


const BillDetail = ({bills}) => {

const signed = (action) => {
  return action === 'Governor Signed' ? 'Signed by Governor' : null;
}

const checked = (action) => {
  return action === 'Governor Signed' ? <Check /> : null
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
        <div className = "card">
          <div className = "card-hed">
            <h3> <span className = "check-icon"> {checked(bills[bill].signed.signAction)} </span>
            {bills[bill].billTitleId}  </h3>
          </div>
          <div className = "bill-content">
            
            <p className = "bill-title"> {bills[bill].billTitle}</p>
            <p><span className = "label"> Session: </span> {bills[bill].session}</p>
            <p><em>{signed(bills[bill].signed.signAction)}
              {formatDate(bills[bill].signed.signAction, bills[bill].signed.signDate)} </em></p>   
          </div>
        </div>
      )
    });
    return billKeys;
  }
}


  return (
    <div className = "bill-detail">
      
      <div className = "bill-hed">
        <h2 className = "bill-hed"> Sponsored Bills </h2>
        
      </div>
      <div className = "check-description">
        <p className = "check-paragraph"> <span className = "check-hed"><Check /> </span> = Bills signed by governor </p>
      </div>
      <div className = "card-container">
        <div className = "card-holder">  
          {mapBills(bills)}
        </div>
      </div>
    </div>
  )

}

export default BillDetail;