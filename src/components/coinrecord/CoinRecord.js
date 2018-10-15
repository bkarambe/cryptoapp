import React, { Component } from 'react';
import './CoinRecord.css';
import { Link } from 'react-router-dom';

class CoinRecord extends Component {
  render() {
    return (
      <div>
         <table class="table table-striped">
         <tbody>
            <tr>
              <td>1</td>
              <td><Link to="/coindetails">Bitcoin</Link></td>
              <td>$6291.31</td>
            </tr>
            <tr>
              <td>2</td>
              <td><a href="#">Bitcoin</a></td>
              <td>$6291.31</td>
            </tr>
            <tr>
              <td>3</td>
              <td><a href="#">Bitcoin</a></td>
              <td>$6291.31</td>
            </tr>

            </tbody>
        </table>
      </div>
    );
  }
}

export default CoinRecord;
