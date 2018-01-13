import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import {getBillDetail} from '../../helper/helper.js'

export const Card = (props) => {
   
   const chooseBill = async(billId) => {
    const billData = await getBillDetail(billId)
   props.billClick(billData); 
  }




  return (
    <div className = "bill-info">
      <div className = "card">
      <div className = "card-top-content">
           <div className = "card-hed">
             <h3> <span className = "check-icon"> </span>
               {props.titleId}  </h3>
             </div>
             <div className = "bill-content">
            
               <p className = "bill-title"> {props.title}</p>
               <p><span className = "label"> Session: </span> {props.session}</p>
               <p className = "latest-action"> <span className = "label"> Latest action: </span>
               {props.action}
               </p>   
             </div>
          </div>
           <div className = "card-footer">
               <button className = "get-bill-button" 
                 onClick = {() => chooseBill(props.id)}>
                 <Link className = 'bill-link' to = {`/bills/${props.id}`}> 
                   Learn more
                 </Link>
              </button>

            </div>
      </div> 
    </div>
  )
}


export const mapDispatchToProps = dispatch => {
  return {
    billClick: bill => {
      dispatch(actions.setClickedBill(bill));
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Card));