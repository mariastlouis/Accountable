import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const SelectLawmaker = (props) => {

const selectOptions = Object.keys(props.lawmakers).map((dataPoint, index) =>{
  return (
    <option key = {index} value = {props.lawmakers[dataPoint].id}>
      {`${props.lawmakers[dataPoint].contact.firstName} ${props.lawmakers[dataPoint].contact.lastName}`}
    </option>
  );
})


 // const selectOptions = optionNames.map( (fileName) => {
 //    return (
 //      <option key={fileName} value={fileName}>
 //        {fileName} 
 //      </option>
 //    );
 //  });
  


  // const lawmakerName = Object.keys(props.lawmakers).map((datapoint) =>{
  //   return console.log(props.lawmakers[datapoint].id)
  // }) 

   // value={currentDataFile}
        // onChange={(e) => changeDataSet(e.target.value)}

  return (
    <div className="lawmaker-select">
      <select>
     
        {selectOptions}
        
      </select>
    </div>
  );
};


export const mapStateToProps = store => {
  return {
    lawmakers: store.lawmakers
  }
};

export default connect(mapStateToProps, null)(SelectLawmaker);