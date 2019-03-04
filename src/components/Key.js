import React, { Component } from 'react';
import '../styles/Key.css';

class App extends Component {
	render() {
		return (
			<div className="keyWrapper">
				<input type="radio" id="huey" name="drone" value={this.props.keyName} checked />
				<label for="huey">{this.props.keyName}</label>
			</div>
		);
	}
}

export default App;
