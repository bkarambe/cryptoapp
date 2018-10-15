import React, { Component } from 'react';
import './SubHeader.css';
import axios from 'axios';
import header from '../../global.json';

class SubHeader extends Component {
  constructor() {
    super();
      this.state = {
        headerdata: []
      }
  }

 // API call to global data
  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v2/global/', {}).then((res) => {
      this.setState(prevState=>({
        ...prevState,
        headerdata: res.data
      }));
    }).catch ((error) => {
     alert('Error in fetching data!!!');
    });
  }
  render() {
    if (this.state.headerdata.length === 0) {
       return null;
    }
    var header= this.state.headerdata;
    return (
      <div>
        <div className="header sub-header" style={{background: '#c0c7d6'}}>
          <div className="row">
            <label className="col-sm-2 sub-header-tab">Cryptocurrencies: <label className="sub-header-tab-value">{header.data.active_cryptocurrencies}</label></label>
            <label className="col-sm-2 sub-header-tab">Markets: <label className="sub-header-tab-value">{header.data.active_markets}</label></label>
            <label className="col-sm-3 sub-header-tab">Market Cap: <label className="sub-header-tab-value">{header.data.quotes.USD.total_market_cap}</label></label>
            <label className="col-sm-2 sub-header-tab">24h Vol: <label className="sub-header-tab-value">{header.data.quotes.USD.total_volume_24h}</label></label>
            <label className="col-sm-3 sub-header-tab">BTC Dominance: <label className="sub-header-tab-value">{header.data.bitcoin_percentage_of_market_cap}%</label></label>
          </div>
        </div>
      </div>
    );
  }
}

export default SubHeader;
