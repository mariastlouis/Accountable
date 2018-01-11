import React, {Component} from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Check from 'react-icons/lib/fa/check';
import Card from '../../components/Card/Card.js';


class AllBills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      currentlyDisplayed: []
    };
  };


componentWillMount() {
  if(this.props.lawmakers.bills.length) {
    this.setState({currentlyDisplayed: this.props.lawmakers.bills})
  }
}

componentWillReceiveProps(nextProps) {
  console.log(nextProps.lawmakers)
  if (nextProps.lawmakers.bills.length) {
     this.setState({currentlyDisplayed: nextProps.lawmakers.bills})
  }
}

 formatDate = (action, date) => {
  const newDate = new Date(date);
  const signDay = newDate.getDate();
  const signMonth = newDate.getUTCMonth()+1;
  const signYear = newDate.getFullYear();
  const formattedDate = signMonth + '/' + signDay + '/' + signYear;

  return action === 'Governor Signed' ? ' on ' + formattedDate : null;
  };


// searchBills = (search) => {
//   let bills = this.props.lawmakers.bills
//   let billFilter = bills.filter((bill) => {
//     return bill.billTitle.includes(search.toLowerCase())
//   })
//   return billFilter
// }

searchBills = (search) => {
  let bills = this.props.lawmakers.bills

  let searchValue = search.toUpperCase();
  console.log(searchValue)

  let billFilter = bills.filter(bill => bill.billTitle.toUpperCase().includes(searchValue) || bill.action.signAction.toUpperCase().includes(searchValue))
  this.setState({currentlyDisplayed: billFilter})
}

mapCards = (bills, index) => {
  if(bills) {
    const billKeys = Object.keys(bills).map((bill, index) => {
   
      return (
      <Card 
      key = {index}
      titleId = {bills[bill].billTitleId}
      id = {bills[bill].billId}
      title = {bills[bill].billTitle}
      action = {bills[bill].action.signAction}
      date = {bills[bill].action.signDate}
      session = {bills[bill].session}
      /> 
    )

    });
    return billKeys
  }
}

  render (){
  return (
   

    <div>
    <Header />

    <div className = "bills-page">
     <h1 className = "accent-hed"> Bills in the 2017 session </h1>
       <div className = "search-box">
          <input 
            className = "search-field"
            onChange = {event => this.searchBills(event.target.value)}
            type = "text"
            placeholder = "Search" />
  </div>
      <div className = "card-container">
        <div className = "card-holder">  

            { this.state.currentlyDisplayed.length > 0 ?
            
            this.mapCards(this.state.currentlyDisplayed) :
            <p> loading bills </p>

          }



       
        

        </div>
      </div>
    
    </div>
    </div>
  
  );
}
};


export const mapStateToProps = store => {
  return {
    lawmakers: store.bills
  };
};

export default connect(mapStateToProps, null)(AllBills);

AllBills.propTypes = {
  bills: PropTypes.object
};