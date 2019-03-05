import React, { Component } from 'react';
import '../styles/Key.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedKey: 'sd'
		}
	}
	render() {
		return (
			<div className="keyWrapper">
				<input type="radio" id={this.props.keyName} name="key" value={this.props.keyName} defaultChecked={this.props.isChecked ? true : false} />
				<label htmlFor={this.props.keyName} className="keyLabel">{this.props.keyName}</label>
			</div>
		);
	}
}

export default App;
