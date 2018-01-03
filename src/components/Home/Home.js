import React, { Component } from 'react';
import SelectLawmaker from '../../containers/SelectLawmaker/SelectLawmaker'
import AddressForm from '../AddressForm/AddressForm'

const Home = () => {
  return (
    <div className = 'home'>
      <h1> home page </h1>
      <SelectLawmaker />
      <AddressForm />
    </div>  
  )
}

export default Home;