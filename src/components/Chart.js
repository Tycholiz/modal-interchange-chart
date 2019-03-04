import React, { Component } from 'react';
import '../styles/Chart.css';

class App extends Component {
	render() {
		return (
			<div className="chartWrapper">
				<img src={require("../assets/images/modal-chart.png")} alt="modal chart"/>
			</div>
		);
	}
}

export default App;
