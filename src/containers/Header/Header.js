import React from 'react';
import accountableLogo from '../../assets/images/accountable-logo2-02.png';
import { Link, NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className = 'header'>
      <header>
        <div className = "header-content">
        <div className = 'logo'>
          <Link to = {'/'}>
            <img src = {accountableLogo} alt = 'logo' />
          </Link>
          </div>
          <div className = 'nav-bar'>
            <NavLink to = '/lawmakers' className = 'nav'>SEARCH LAWMAKERS </NavLink>
            <NavLink to = '/bills' className = 'nav'>SEARCH BILLS </NavLink>
            
          </div>
          </div>
      </header>
    </div>  
  );
};

export default Header;

