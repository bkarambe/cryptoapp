import React, { Component } from 'react';
import './CoinList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import listing from '../../data.json';
import tickers from '../../ticker_1.json';

class CoinList extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
      list: []
    }
  };

  //----------------------------API call for selecting a price from ticker API-----------------------------
  // detailsApi(id) {
  //   axios.get('https://api.coinmarketcap.com/v2/ticker/'+ id +'/', {}).then((res) => {
  //     this.setState(prevState => ({
  //       ...prevState,
  //       details: res.data
  //     }));
  //   }).catch((error) => {
  //     alert('Error in fetching data for details api!!!');
  //   });
  //   return this.state.details;
  // };

  //----------------------------API call for list of currencies--------------------------------------------
  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v2/listings/', {}).then((res) => {
      this.setState(prevState => ({
        ...prevState,
        list: res.data
      }));
    }).catch((error) => {
      // alert('Error in fetching data!!!');
    });
  };

  render() {
    //--------------------------Event Handling, if there is no data or API fails-------------------------------------------
    var lists = this.state.list;
    if (lists.length === 0) {
      return null;
    }
    var count = 0;
    return (
      <div style={{ background: '#d7e2e8', margin: '0px' }} className="row" >
        <div>
          <div >
            <img src={require("../../images/cryptocurrencies.jpg")} className="col-sm-4 crypto-currencies" style={{ height: '700px' }} />
          </div>
          <div className="col-sm-8 table-bordered-wrapper">
            <table className="table table-bordered" style={{ border: '2px solid black' }}>
              <tr>
                <td className="col-sm-4" style={{ float: 'right' }}><b>#</b></td>
                <td className="col-sm-2"><b>Name</b></td>
                <td className="col-sm-4 price-table-head" style={{ left: '0px', font: '28px' }}><b>Price</b></td>
              </tr>
            </table>
            <div class="table-wrapper-scroll-y">
              <table className='table table-fixed' style={{ height: '300px' }}>
                {
                  lists.data.map((list) => {
                    count = lists.data.indexOf(list);
                    return (
                      <tr>
                        <td className="col-sm-4" style={{ float: 'right' }}>{count + 1}</td>
                        <td className="col-sm-2"><Link to={"/coindetails/" + list.id} className="list-item-name">{list.name}</Link></td>
                        <td className="col-sm-4" style={{ padding: '0px' }}>${(tickers.data.quotes.USD.price.toFixed(1))}</td>
                      </tr>
                    );
                  })
                }
              </table>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default CoinList;
