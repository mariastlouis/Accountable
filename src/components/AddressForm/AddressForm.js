import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {setCoordinates} from '../../helper/helper'

class AddressForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      address: 'Denver, CO'              
     }
    this.onChange = (address) => this.setState({ address })
  }


  handleFormSubmit = (async(event) => {
    event.preventDefault()
    const getAddress = await geocodeByAddress(this.state.address)
    const getCoords = await getLatLng(getAddress[0])
    const lawmakerCoords = await setCoordinates(getCoords.lat, getCoords.lng);
    const setLawmakers = await mapLawmakers(lawmakerCoords)
  })

  const mapLawmakers = (lawmakers) => {
    return Object.keys(lawmakerCoords).map((lawmaker) =>{})
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default AddressForm