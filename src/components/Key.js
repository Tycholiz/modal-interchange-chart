import React, { Component } from 'react';
import '../styles/Key.css';

class App extends Component {
	render() {
		return (
			<div className="keyWrapper">
				<input
					type="radio"
					id={this.props.keyName}
					name="key"
					value={this.props.keyName}
					defaultChecked={this.props.isChecked ? true : false}
					onChange={() => this.props.changeKey(document.getElementById(this.props.keyName).id)}
				/>
				<label
					htmlFor={this.props.keyName}
					className="keyLabel"
				>
					{this.props.keyValue}
				</label>
			</div>
		);
	}
}

export default App;
