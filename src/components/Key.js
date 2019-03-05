import React, { Component } from 'react';
import '../styles/Key.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedKey: 'wq'
		}
	}

	// setKeyState = () => {
	// 	const currentKey = document.getElementById(this.props.keyValue).value
	// 	console.log(currentKey)
	// }
	// nextKey = document.getElementById(this.props.keyValue).value
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
