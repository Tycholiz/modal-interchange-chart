import React, { Component } from 'react';
import '../styles/Key.css';

class App extends Component {
	render() {
		return (
			<div className="keyWrapper">
				<input type="radio" id={this.props.keyName} name="drone" value={this.props.keyName} />
				<label htmlFor={this.props.keyName} className="label">{this.props.keyName}</label>
			</div>
		);
	}
}

export default App;
