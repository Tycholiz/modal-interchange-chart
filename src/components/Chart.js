import React, { Component } from 'react';
import '../styles/Chart.css';

class Chart extends Component {
	render() {
		const { currentKey, currentNotation } = this.props;
		return (
			<div className="chartWrapper">
				<img
					src={require("../assets/images/modal-chart.png")}
					alt="modal chart"
				/>
				<img
					src={require(`../assets/images/overlay-${currentNotation}.png`)}
					alt="notation overlay"
					className="overlayImage"
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

export default Chart;
