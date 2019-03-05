import React, { Component } from 'react';
import '../styles/Chart.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedKey: 'sd'
		}
	}
	render() {
		const { currentKey, currentNotation } = this.props;
		return (
			<div className="chartWrapper">
				<img
					src={require("../assets/images/modal-chart.png")}
					alt="modal chart"
				/>
				<img
					src={require(`../assets/images/${currentKey}-${currentNotation}.png`)}
					alt="overlay"
					className="overlayImage"
				/>
			</div>
		);
	}
}

export default App;
