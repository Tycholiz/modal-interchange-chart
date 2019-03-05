import React, { Component } from 'react';
import KeyContainer from './KeyContainer';
import NotationContainer from './NotationContainer';
import Chart from './Chart';
import '../styles/App.css';

import { Key, Notation } from '../enumerables'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Interactive Modal Chart</h1>
        </header>
        <div className="buttonWrapper">
          <KeyContainer
          />
          <NotationContainer
          />
        </div>
        <Chart
          currentKey={Key.Db}
          currentNotation={Notation.Sevenths}
        />
      </div>
    );
  }
}

export default App;
