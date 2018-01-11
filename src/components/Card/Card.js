import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title, titleId, id, action, date, session}) => {
  return (
      <div className = "card">
           <div className = "card-hed">
             <h3> <span className = "check-icon"> </span>
               {titleId}  </h3>
             </div>
             <div className = "bill-content">
            
               <p className = "bill-title"> {title}</p>
               <p><span className = "label"> Session: </span> {session}</p>
               <p className = "latest-action"> <span className = "label"> Latest action: </span>
               {action}
               </p>   
             </div>
           </div>
  )
}

export default Card; 