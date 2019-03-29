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
    this.setState({
      selectedKey: nextKey
    })
  }

  changeNotation = (nextNotation) => {
    this.setState({
      selectedNotation: nextNotation
    })
  }

  render() {
    const { selectedKey, selectedNotation } = this.state;

    return (
      <div className="App">
        <header className="App-header">
         {/* interactive chart of modes */}
          <h1>Interactive Modal Chart</h1>
        </header>
        <NotationContainer
          changeNotation={this.changeNotation}
        />
        <div className="buttonWrapper">
          <KeyContainer
            changeKey={this.changeKey}
          />
          <Chart
            currentKey={selectedKey}
            currentNotation={selectedNotation}
          />
        </div>
      </div>
    );
  }
}

export default App;
