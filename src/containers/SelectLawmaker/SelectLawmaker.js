import React from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import {selectNewLawmaker} from '../../helper/helper'

export const SelectLawmaker = (props) => {


let info = props.lawmakers.lawmakers

const selectOptions = Object.keys(info).map((dataPoint, index) =>{
  return (
    <option key = {index} value = {info[dataPoint].id}>
      {`${info[dataPoint].contact.firstName} ${info[dataPoint].contact.lastName}`}
    </option>
  );
})



const selectLawmaker = async(event, id) =>{

  const lawmakerData = await selectNewLawmaker(id);

  props.lawmakerSelect(lawmakerData.id)
  // console.log(lawmakerData)

  // this.props.storeLawmakers(lawmakerData)

  // props.lawmakerSelect(id)
}


  return (
    <div className="select">
      <select onChange = {(e) => selectLawmaker(e, e.target.value)}>
     
    {selectOptions}
       
        
      </select>
    </div>
  );
};

export const mapDispatchToProps = dispatch => ({
  lawmakerSelect: id => dispatch(actions.setSelectLawmaker(id))

});

export const mapStateToProps = store => {
  return {
    lawmakers: store.lawmakers
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLawmaker);