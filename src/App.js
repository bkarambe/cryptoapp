import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import SubHeader from './components/subheader/SubHeader';
import CoinDetails from './components/coindetails/CoinDetails';
import CoinList from './components/coinlist/CoinList';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter><div>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/home" component={Home} ></Route>
          <Route exact path="/coindetails/:id" component={CoinDetails} ></Route>
        </div>
        </BrowserRouter>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        {/* <SubHeader/>
        <CoinList/> */}
        {/* <Home/> */}
        {/* <CoinDetails/> */}
      </div>
    );
  }
}

export default App;
