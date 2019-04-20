import React, { Component } from 'react';
import '../styles/Chart.css';

class Chart extends Component {
	render() {
		const { currentKey, currentNotation } = this.props;
		return (
			<div className="chartWrapper">
					<div className="row">
						<div className="mode-instance cell cell-whole">Ionian</div>
						<div className="chord cell cell-whole">Dm</div>
						<div className="chord cell cell-whole">F</div>
						<div className="chord cell cell-half">Em</div>
						<div className="chord cell cell-whole">G</div>
						<div className="chord cell cell-whole">Am</div>
						<div className="chord cell cell-whole">C</div>
						<div className="chord cell cell-half">Bdim</div>
					</div>
					<div className="row">
						<div className="mode-instance cell cell-whole">Ionian</div>
						<div className="chord cell cell-whole">Dm</div>
						<div className="chord cell cell-half">Em</div>
						<div className="chord cell cell-whole">F</div>
						<div className="chord cell cell-whole">G</div>
						<div className="chord cell cell-whole">Am</div>
						<div className="chord cell cell-half">Bdim</div>
						<div className="chord cell cell-whole">C</div>
					</div>
					<div className="row">
						<div className="mode-instance cell cell-whole">Ionian</div>
						<div className="chord cell cell-whole">C</div>
						<div className="chord cell cell-whole">Dm</div>
						<div className="chord cell cell-whole">F</div>
						<div className="chord cell cell-half">Em</div>
						<div className="chord cell cell-whole">Am</div>
						<div className="chord cell cell-whole">G</div>
						<div className="chord cell cell-half">Bdim</div>
					</div>
					<div className="row">
						<div className="mode-instance cell cell-whole">Ionian</div>
						<div className="chord cell cell-whole">C</div>
						<div className="chord cell cell-whole">Dm</div>
						<div className="chord cell cell-half">Em</div>
						<div className="chord cell cell-whole">F</div>
						<div className="chord cell cell-whole">G</div>
						<div className="chord cell cell-whole">Am</div>
						<div className="chord cell cell-half">Bdim</div>
					</div>
					<div className="row">
						<div className="mode-instance cell cell-whole">Ionian</div>
						<div className="chord cell cell-whole">C</div>
						<div className="chord cell cell-whole">Dm</div>
						<div className="chord cell cell-half">Em</div>
						<div className="chord cell cell-whole">F</div>
						<div className="chord cell cell-whole">G</div>
						<div className="chord cell cell-half">Bdim</div>
						<div className="chord cell cell-whole">Am</div>
					</div>
					<div className="row">
						<div className="mode-instance cell cell-whole">Ionian</div>
						<div className="chord cell cell-whole">C</div>
						<div className="chord cell cell-half">Em</div>
						<div className="chord cell cell-whole">Dm</div>
						<div className="chord cell cell-whole">F</div>
						<div className="chord cell cell-half">Bdim</div>
						<div className="chord cell cell-whole">G</div>
						<div className="chord cell cell-whole">Am</div>
					</div>
					<div className="row">
						<div className="mode-instance cell cell-whole">Ionian</div>
						<div className="chord cell cell-half">Em</div>
						<div className="chord cell cell-whole">C</div>
						<div className="chord cell cell-whole">Dm</div>
						<div className="chord cell cell-half">Bdim</div>
						<div className="chord cell cell-whole">F</div>
						<div className="chord cell cell-whole">G</div>
						<div className="chord cell cell-whole">Am</div>
					</div>
			</div>
		);
	}
}

export default Chart;
