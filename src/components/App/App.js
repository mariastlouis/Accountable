import React, { Component } from 'react';
import './App.css';
import getLawmaker from '../../helper/helper';
import DetailsPage from '../../containers/Details/DetailsPage'
import { connect } from 'react-redux';
import {cleanLawmaker} from '../../helper/helper'
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
 
  const lawmakerFetch = await fetch(`https://openstates.org/api/v1/legislators/?state=co&apikey=${key}`);
  const lawmakerObject = await lawmakerFetch.json();
  const cleanData = await cleanLawmaker(lawmakerObject)
  this.props.storeLawmakers(cleanData)

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
