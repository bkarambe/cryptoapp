import React, { Component } from 'react';
import './Home.css';
import SubHeader from '../subheader/SubHeader';
import CoinDetails from '../coindetails/CoinDetails';
import CoinList from '../coinlist/CoinList';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <CoinList />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
