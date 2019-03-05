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
		return (
			<div className="chartWrapper">
				<img src={require("../assets/images/modal-chart.png")} alt="modal chart"/>
				<img src={require("../assets/images/c-triads.png")} alt="overlay image" className="overlayImage"/>
			</div>
		);
	}
}

export default App;
