import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {setCoordinates} from '../../helper/helper'

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

  mapLawmakers = (lawmakers) => {
    if(lawmakers){
   return Object.keys(lawmakers).map((lawmaker) => {
      return (
      <div className = "selectedLawmakers">
        <h3>{lawmakers[lawmaker].contact.firstName} {lawmakers[lawmaker].contact.lastName} </h3>
        <img src = {lawmakers[lawmaker].contact.image} />
      </div>
    )
 })
  }
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
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

export default AddressForm