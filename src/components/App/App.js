import React, { Component } from 'react';
import './App.css';
import {getLawmaker} from '../../helper/helper';
import DetailsPage from '../../containers/Details/DetailsPage'
import { connect } from 'react-redux';
// import {cleanLawmaker} from '../../helper/helper'
import * as actions from '../../actions/';
import key from '../../key.js'

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   lawmakerArray:[]
    // };
    
  };

componentDidMount = async ()  => {
  const lawmakerData = await getLawmaker();
  this.props.storeLawmakers(lawmakerData)
  };

  render() {
    return (
        <div className="App">
          <DetailsPage />
        </div>
        
    );
  }
}

export const mapStateToProps = store => {
  return {
    lawmakers: store.lawmakers
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    storeLawmakers: (lawmakers) => dispatch(actions.makeLawmakerArray(lawmakers))

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
