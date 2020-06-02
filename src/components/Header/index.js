import React from 'react';
import logo from '../../assets/logo.svg';
import './style.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__menu">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div>Dashboard</div>
        <div>Properties</div>
      </div>

      <div className="header__navigation">
        <div>icon</div>
        <div className="header__searchbar">searchbar</div>
        <div>profile</div>
      </div>
    </div>
  );
};

export default Header;
