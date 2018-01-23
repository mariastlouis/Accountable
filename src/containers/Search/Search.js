import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Search = (props) => {
  console.log(props);


  const searchBills = (search) => {
    console.log(search);
  };


  return (
    <div className = "search-box">
      <input 
        className = "search-field"
        onChange = {event => searchBills(event.target.value)}
        type = "text"
        placeHOlder = "Search" />
    </div>
  );
};


export const mapStateToProps = store => {
  return {
    lawmakers: store.bills
  };
};

export default connect(mapStateToProps, null)(Search);