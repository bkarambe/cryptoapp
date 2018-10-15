import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="home-logo-wrapper">
          <div>
            <div className="row">
              <img src={require("../../images/home_logo.png")} style={{ height: '50px', width: '50px', padding: '0px' }} className="home-logo" />
              <a href="/" className="coin-market-header"><b><i>CoinMarketCap</i></b></a>
              <label className="side-heading">Cryptocurrencies Market Capitalization</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
