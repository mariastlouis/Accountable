import React, { Component } from 'react';
import accountableLogo from '../../assets/images/accountable-logo2-02.png';
import { NavLink, Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className = 'header'>
    <header>
      <div className = 'logo'>
        <Link to = {'/'}>
          <img src = {accountableLogo} alt = 'logo' />
        </Link>
      </div>
      <div className = 'nav-bar'>
        <NavLink to = '/lawmakers' className = 'nav'>LAWMAKERS </NavLink>
        <NavLink to = '/bills' className = 'nav'>BILLS </NavLink>
        <NavLink to = '/committees' className = 'nav'>COMMITTEES </NavLink>
      </div>
    </header>
    
     
    </div>  
  )
}

export default Header;