import React, { Component } from 'react';
import '../styles/Notation.css';

class App extends Component {
	render() {
		return (
			<div className="notationWrapper">
				<input type="radio" id={this.props.notationName} name="notation" value={this.props.notationName} />
				<label htmlFor={this.props.notationName} className="notationLabel">{this.props.notationName}</label>
			</div>
		);
	}
}

export default App;
