import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {setCoordinates, cleanLawmakerSelect} from '../../helper/helper'
import { Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../actions/';

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      address: 'Denver, CO',
      selectedLawmakers: []              
     }
    this.onChange = (address) => this.setState({ address })
  }


  handleFormSubmit = (async(event) => {
    event.preventDefault()
    const getAddress = await geocodeByAddress(this.state.address)
    const getCoords = await getLatLng(getAddress[0])
    const lawmakerCoords = await setCoordinates(getCoords.lat, getCoords.lng);
    
    const setLawmakers = await this.mapLawmakers(lawmakerCoords)
    this.setState({selectedLawmakers: lawmakerCoords})

  })

  chooseLawmaker = async(lawmaker) => {
    const lawmakerData = await cleanLawmakerSelect(lawmaker);
    this.props.lawmakerClick(lawmakerData)
  }

  mapLawmakers = (lawmakers) => {
   
    if(lawmakers){

    return Object.keys(lawmakers).map((lawmaker) => {
    
     return (
         <div className = "selectedLawmakers">
            <h3>{lawmakers[lawmaker].first_name} {lawmakers[lawmaker].last_name} </h3>
                     <img src = {lawmakers[lawmaker].photo_url}  />
                     <button onClick = {() => this.chooseLawmaker(lawmakers[lawmaker])}>
                       <Link to = {`/lawmakers/${lawmakers[lawmaker].id}`}> 
                       Choose lawmaker 
                     </Link>
                     </button> 
          
          
         </div>
       ) 
    })
  }
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    }

    return (
      <div className = 'address-form'>
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
        <button type="submit">Submit</button>
      </form>
        <div>
          {this.mapLawmakers(this.state.selectedLawmakers)}
        </div>
      </div>
    )
  }
}



export const mapDispatchToProps = dispatch => {
  return {
    lawmakerClick: lawmaker => {
      dispatch(actions.setClickedLawmaker(lawmaker))
    }
   
  };
};


export default withRouter(connect(null, mapDispatchToProps)(AddressForm));