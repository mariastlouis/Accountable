import React from 'react';
import PropTypes from 'prop-types';
import './Committees.css';

const Committees = ({committees}) => {


  const capitalize = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const mapCommittee = (committees) => {
    if (committees) {
      const committeeKeys = Object.keys(committees).map((committee, index) =>{
        if (committees[committee].name !== 'none') {
          return (
            
              <li className = "committee-element"key = {index}> <span className = "darker">{capitalize(committees[committee].position)} </span>
             of <a href = {committees[committee].website}> {committees[committee].name} </a></li>
          
          );
        }
      });
      return committeeKeys; 
    }
  };

  return (
    <div className = "committees">
      <div className = "committee-hed">
        <h2> Committee Assignments </h2>
      </div>
      <div className = "committee-info">
        <ul>
        {mapCommittee(committees)}
        </ul>
      </div>
      <hr />
    </div>

  );
};  

export default Committees;

Committees.propTypes = {
  committees: PropTypes.array
};