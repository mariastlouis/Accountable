import React from 'react';
import PropTypes from 'prop-types';

const Committees = ({committees}) => {


const capitalize = (string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const getChamber = (chamber) => {
  return chamber === 'upper' ? 'Senate' : 'House';
}


const label = (field, label) => {
  return field ? label : null;
}

const mapCommittee = (committees) => {
  if (committees) {
    const committeeKeys = Object.keys(committees).map ((committee) =>{
      if (committees[committee].name !== 'none') {
        return (
          <div>
            <p> {capitalize(committees[committee].position)} of <a href = {committees[committee].website}> {committees[committee].name} Committee </a></p>
          </div>
        )
      }
    })
    return committeeKeys 
    }
}

  return (
    <div className = "committees">
    <h2> Committees </h2>
      {mapCommittee(committees)}
    </div>

  )
}  

export default Committees;