import React from 'react';
import AddressForm from '../AddressForm/AddressForm';
import Header from '../../containers/Header/Header';
import './Home.css';
import MapMarker from 'react-icons/lib/fa/map-marker';
import Binoculars from 'react-icons/lib/fa/binoculars';
import Search from 'react-icons/lib/fa/search';

const Home = () => {
  return (
    <div className = 'home'>
      <Header />
      
      <div className = "website-description">
        <div className = "content-container">
          <h1 className = 'main-hed'> Dig deep into Colorado State Politics </h1>
          <div className = "description-text">
            <div> <span className = "icon"> <MapMarker /> </span> Find your state lawmakers</div>
            <div> <span className = "icon"> <Binoculars /> </span> Track their progress </div>
            <div> <span className = "icon"> <Search /> </span>Search bills and committees </div>

          </div>
        </div>
      </div>
      
      <AddressForm />
    </div>  
  );
};

export default Home;