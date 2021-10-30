import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Rates from './pages/rates';
import { fetchCurrencies } from './service';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cryptocurrencies:[]
    };
  }


getRates = () => {
  fetchCurrencies().then(data => {
    this.setState({ cryptocurrencies: data.data });
  });
}




render() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rates">Cryptocurrency Rates</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Route path="/rates">
          <Rates currates={this.state.cryptocurrencies} getRates={this.getRates}/>
        </Route>
      </main>
    </div>
  );
}
}

export default App;
