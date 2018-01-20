import React, { Component } from 'react';
import './App.css';
import {getLawmaker, getBills} from '../../helper/helper';
import DetailsPage from '../../containers/Details/DetailsPage';
import AllBills from '../../containers/AllBills/AllBills.js';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import { Route, withRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';
import PropTypes from 'prop-types';
import BillDetailsPage from '../../containers/BillDetailsPage/BillDetailsPage.js';


export class App extends Component {
  constructor() {
    super();
  }


componentDidMount = async ()  => {
  const lawmakerData = await getLawmaker();
  this.props.storeLawmakers(lawmakerData);
  const billData = await getBills();
  this.props.storeBills(billData);
};
        
render() {

  return (
      

    <div>
      
      <Route exact path = '/' component = {Home} />
      <Route exact path = '/lawmakers' component = {Home} />
      <Route exact path = '/bills' component = {AllBills} />
      <Route path = '/lawmakers/:id' render = {({match}) => {
        const lawmakerObject = this.props.lawmakers.lawmakers;
        const {id} = match.params;

        const lawmakerDetail = 
          Object.keys(lawmakerObject).find(lawmaker => lawmakerObject[lawmaker].id === id);
        
        return <DetailsPage />;
      }} />
      <Route path = '/bills/:id' render = {({match}) => {
        const billObject = this.props.bills.bills;
        const {id} = match.params;
        const billDetail = 
           Object.keys(billObject).find(bill => billObject[bill].billId === id);
        return <BillDetailsPage />;
      }} />


    </div>
      
  );
}
}

export const mapStateToProps = store => {
  return {
    lawmakers: store.lawmakers,
    bills: store.bills
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    storeLawmakers: lawmakers => {
      dispatch(actions.makeLawmakerArray(lawmakers));
    },
    lawmakerClick: lawmaker => {
      dispatch(actions.setClickedLawmaker(lawmaker));
    },
    storeBills: bills => {
      dispatch(actions.setBillArray(bills));
    }
   
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  lawmakers: PropTypes.object,
  storeLawmakers: PropTypes.func,
  lawmakerDetail: PropTypes.object

};
