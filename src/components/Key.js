import React, { Component } from 'react';
import '../styles/Key.css';

class App extends Component {
	render() {
		return (
			<div className="keyWrapper">
				<h1>{this.props.keyName}</h1>
			</div>
		);
	}
}

export default App;
