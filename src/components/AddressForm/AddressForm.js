import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {setCoordinates, cleanLawmakerSelect, getChamber} from '../../helper/helper';
import { Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import './AddressForm.css';
import SelectLawmaker from '../../containers/SelectLawmaker/SelectLawmaker';
import PropTypes from 'prop-types';

export class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: 'Denver, CO',
      selectedLawmakers: []              
    };
    // this.onChange = (address) => this.setState({ address });
  }

  cachedAddress = () => {
    const findAddress = localStorage.getItem("Address");
  
    if (findAddress) {
      return this.setState({ address: JSON.parse(findAddress) });
    } else {
      return this.setState({address: 'Colorado Springs, CO'});
    }

  }

  onChange = (address) => {
    localStorage.setItem("Address", JSON.stringify(address));
    this.setState({ address });
  }


  handleFormSubmit = (async(event) => {
    event.preventDefault();
    const getAddress = await geocodeByAddress(this.state.address);
    const getCoords = await getLatLng(getAddress[0]);
    const lawmakerCoords = await setCoordinates(getCoords.lat, getCoords.lng);
    // const setLawmakers = await this.mapLawmakers(lawmakerCoords);
   
    this.props.storeLocalLawmakers(lawmakerCoords);
    this.setState({selectedLawmakers: lawmakerCoords});
   

  })

  handleFormSelect = (async(event) => {

    const getAddress = await geocodeByAddress(this.state.address);
    const getCoords = await getLatLng(getAddress[0]);
    const lawmakerCoords = await setCoordinates(getCoords.lat, getCoords.lng);
    this.props.storeLocalLawmakers(lawmakerCoords);
    this.props.storeAddress(event);
    localStorage.setItem("Address", JSON.stringify(event));
    this.setState({address: event}); 
    
  });

  chooseLawmaker = async(lawmaker) => {
    const lawmakerData = await cleanLawmakerSelect(lawmaker);
    this.props.lawmakerClick(lawmakerData);
  }

 

  mapLawmakers = (lawmakers) => {
    if (lawmakers){
      return Object.keys(lawmakers).map((lawmaker, index) => {
    
        return (
          <div className = "selected-lawmakers" key = {index}>
            <div className = "lawmaker-title">
              <h3 className = 'upper'> {getChamber(lawmakers[lawmaker].chamber)} District {lawmakers[lawmaker].district}</h3>
              <h3>{lawmakers[lawmaker].first_name} {lawmakers[lawmaker].last_name} </h3>
            </div>
            <img className = 'lawmaker-result-image'src = {lawmakers[lawmaker].photo_url}  />
            <button className = "get-lawmaker-button" 
              onClick = {() => this.chooseLawmaker(lawmakers[lawmaker])}>
              <Link className = 'lawmaker-sponsor-link' to = {`/lawmakers/${lawmakers[lawmaker].id}`}> 
                Learn more
              </Link>
            </button> 
          </div>
        ); 
      });
    }
  }

  render() {
    const inputProps = {
      value:  this.state.address,
      onChange: this.onChange
    };

    const myStyles = {
      input: {
        display: 'inline-block',
        width: '300px',
        padding: '10px',
        fontSize: '20px',
        height: '21px',
        border: '2px solid #3a6985'
      }
    
    };

    return (
      <div className = 'address-form'>
        <div className = 'input-info'>
          <div className = 'input-content'>
            <div className = 'left-side'>
              <h2 className = 'highlight'> Enter your address </h2>
              <form onSubmit={this.handleFormSubmit}>
      
                <div className = "input">

                  <PlacesAutocomplete styles = {myStyles}inputProps={inputProps} onSelect={this.handleFormSelect}/>
                </div>
                <div className = "button-class">
                  <button type="submit" className = "submit-button"> Find my lawmakers</button>
                </div>
              </form>
            </div>

            <div className = "middle-div">
              <span className = 'big-Or'> OR </span>
            </div>
            <div className = "right-div">
              <h2 className = 'highlight'> Select a lawmaker </h2>
              <SelectLawmaker />

          
            </div>
          </div>
        </div>

        <div className = 'lawmaker-results'>
          {this.mapLawmakers(this.props.lawmakers.localLawmakers)}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => {
  return {
    lawmakers: store.lawmakers
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    lawmakerClick: lawmaker => {
      dispatch(actions.setClickedLawmaker(lawmaker));
    },
    storeLocalLawmakers: lawmakerArray => {
      dispatch(actions.setLocalLawmakers(lawmakerArray));
    },
    storeAddress: address => {
      dispatch(actions.setAddress(address));
    }
   
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddressForm));

AddressForm.propTypes = {
  lawmakerClick: PropTypes.func
};