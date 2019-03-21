import React, { Component } from 'react';
import '../styles/Notation.css';

class Notation extends Component {
	render() {
		return (
			<div className="notationWrapper selection">
				<input
					type="radio"
					id={this.props.notationName}
					name="notation"
					value={this.props.notationName}
					defaultChecked={this.props.isChecked ? true : false}
					onChange={() => this.props.changeNotation(document.getElementById(this.props.notationName).value)}
				/>
				<label
					htmlFor={this.props.notationName}
					className="notationLabel"
				>
					{this.props.notationName}
				</label>
			</div>
		);
	}
}

export default Notation;
