import React, { Component } from 'react';
import KeyContainer from './KeyContainer';
import NotationContainer from './NotationContainer';
import Chart from './Chart';
import '../styles/App.css';

import { Key, Notation } from '../enumerables'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKey: Key.C,
      selectedNotation: Notation.Triads
    }
  }

  changeKey = (nextKey) => {
    console.log(nextKey)
    this.setState({
      selectedKey: nextKey
    })
    // TODO: Need to set a dictionary that will match Db to C#/Db. right now nextKey = C#/Db, but it needs to equal just Db
  }

  render() {
    const { selectedKey, selectedNotation } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Interactive Modal Chart</h1>
        </header>
        <div className="buttonWrapper">
          <KeyContainer
            changeKey={this.changeKey}
          />
          <NotationContainer
          />
        </div>
        <Chart
          currentKey={selectedKey}
          currentNotation={selectedNotation}
        />
      </div>
    );
  }
}

export default App;
