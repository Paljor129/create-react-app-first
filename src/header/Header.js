import React, { Component } from 'react';
import './Header.css';
import logo from './pandalogoi.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header1">
          <div className="HeaderLogo">
            <img src={logo} className="Header-logo" alt="logo" />
          </div>
          <div className="BtnH">
            <button className="btnH">RETOUR A LA FRISE</button>
          <button className="BtnH1">FAIRE UN DON</button>
          </div>
        </div>
        <div>
          <video src="http://40.wwf.fr/medias/videos/mp4/baleine.mp4" autoPlay type="video/mp4"></video>
        </div>
      </div>
    );
  }
}

export default Header;
