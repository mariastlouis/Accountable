import React from 'react';
import PropTypes from 'prop-types';
import './Committees.css'

const Committees = ({committees}) => {


const capitalize = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const label = (field, label) => {
  return field ? label : null;
}

const mapCommittee = (committees) => {
  if (committees) {
    const committeeKeys = Object.keys(committees).map ((committee, index) =>{
      if (committees[committee].name !== 'none') {
        return (
          <div key = {index}>
            <p> <span className = "darker">{capitalize(committees[committee].position)} </span>
             of <a href = {committees[committee].website}> {committees[committee].name} </a></p>
          </div>
        )
      }
    })
    return committeeKeys 
    }
}

  return (
    <div className = "committees">
      <div className = "committee-hed">
        <h2> Committee Assignments </h2>
      </div>
      <div className = "committee-info">
        {mapCommittee(committees)}
      </div>
      <hr />
    </div>

  )
}  

export default Committees;