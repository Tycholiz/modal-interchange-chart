import React, { Component } from 'react';
import '../styles/Notation.css';

class App extends Component {
	render() {
		return (
			<div className="notationWrapper">
				<h1>{this.props.notationName}</h1>
			</div>
		);
	}
}

export default App;
