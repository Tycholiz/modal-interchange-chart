import React, { Component } from 'react';
import '../styles/Key.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedKey: 'wq'
		}
	}

	setKeyState = () => {
		const currentKey = document.getElementById(this.props.keyName).value
		console.log(currentKey)
	}
	render() {

		return (
			<div className="keyWrapper">
				<input
					type="radio"
					id={this.props.keyName}
					name="key" value={this.props.keyName}
					defaultChecked={this.props.isChecked ? true : false}
					onChange={() => this.setKeyState()}
				/>
				<label
					htmlFor={this.props.keyName}
					className="keyLabel"
				>
					{this.props.keyName}
				</label>
			</div>
		);
	}
}

export default App;
