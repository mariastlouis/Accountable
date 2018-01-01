import React, { Component } from 'react';
import './App.css';
import {getLawmaker} from '../../helper/helper';
import DetailsPage from '../../containers/Details/DetailsPage'
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import SelectLawmaker from '../../containers/SelectLawmaker/SelectLawmaker'
import { Route, withRouter, Link } from 'react-router-dom'
import AddressForm from '../AddressForm/AddressForm'
import Home from '../../components/Home/Home'

class App extends Component {
  constructor() {
    super();
    
  };

componentDidMount = async ()  => {
  const lawmakerData = await getLawmaker();
  this.props.storeLawmakers(lawmakerData)
  };
        
  render() {

    return (

       <div>

       <Route exact path = '/' component = {Home} />
      <Route path = '/lawmakers/:id' render = {({match}) => {
          const lawmakerObject = this.props.lawmakers.lawmakers
          const {id} = match.params
          const lawmakerDetail = Object.keys(lawmakerObject).find(lawmaker => lawmakerObject[lawmaker].id === id)
          const newLawmaker =  lawmakerObject[lawmakerDetail]
         
        
            return <DetailsPage />
          

       }} />


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
    storeLawmakers: lawmakers => {
      dispatch(actions.makeLawmakerArray(lawmakers));
    },
    lawmakerClick: lawmaker => {
      dispatch(actions.setClickedLawmaker(lawmaker))
    }
   
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
