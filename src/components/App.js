import React, { Component } from 'react';
import KeyContainer from './KeyContainer';
import NotationContainer from './NotationContainer';
import Chart from './Chart';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Modal Chart</h1>
        </header>
        <div className="buttonWrapper">
          <KeyContainer />
          <NotationContainer />
        </div>
        <Chart />
      </div>
    );
  }
}

export default App;
