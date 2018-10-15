import React, { Component } from 'react';
import './CoinDetails.css';
import SubHeader from '../subheader/SubHeader';
import Header from '../header/Header';
import '../../images/rank_logo.png';
import axios from 'axios';
import tickers from '../../ticker_1.json';
import Footer from '../footer/Footer';

class CoinDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: []
    }
  };

  //-----------------------------API for getting details of individual currencies-------------------------------------------
  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v2/ticker/' + this.props.location.pathname.split("/")[2] + '/', {}).then((res) => {
      this.setState(prevState => ({
        ...prevState,
        details: res.data
      }));
    }).catch((error) => {
      alert('Error in fetching data for details api!!!');
    });
  }

  render() {
    // --------------------------Event Handling, if there is no data or API fails-------------------------------------------
    if (this.state.details.length === 0) {
      return null;
    }
    var details = this.state.details;
    //var details = tickers;
    return (
      <div>
        <Header />
        <SubHeader />
        <div>
          <div className="coin-details-wrapper">
            <div className="col-sm-4 coin-details-div coin-label">
              <img src={require("../../images/currency_logo.png")} style={{ height: '50px', width: '50px', padding: '0px' }} />
              <label className="coin-details-label coin-name-label">{details.data.name}</label>
            </div>
            <div className="col-sm-8 coin-details-div price-label-usd">
              <img src={require("../../images/dollar_sign.png")} style={{ height: '50px', width: '50px', padding: '0px' }} className="dollar-sign" />
              <label className="coin-details-label">${details.data.quotes.USD.price}USD</label>
            </div>
          </div>
          <div className="row" style={{ background: 'aliceblue', margin: '0px 0px -15px' }}>
            <div className="col-sm-4 coin-details-div rank" >
              <img src={require("../../images/rank_logo.png")} style={{ height: '50px', width: '50px', padding: '0px' }} />
              <label className="coin-details-label rank-label" style={{ margin: '0px 31px' }}>Rank:{details.data.rank}</label>
            </div>
            <div className="col-sm-8  coin-details-div">
              <div class="table-responsive table-bordered">
                <table class="table">
                  <thead style={{ background: '#5c6b9c' }}>
                    <tr>
                      <th>Market Cap</th>
                      <th>Volume (24h)</th>
                      <th>Circulating Supply</th>
                      <th>Max Supply</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-bordered">
                      <td>${details.data.quotes.USD.volume_24h} USD</td>
                      <td>${details.data.quotes.USD.market_cap} USD</td>
                      <td>{details.data.circulating_supply} BTC</td>
                      <td>{details.data.max_supply} BTC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row"><img src={require("../../images/cryptocurrencieshori.jpg")} style={{ width: '100%', height: '300px' }} />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default CoinDetails;
