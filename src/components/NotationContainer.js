import React, { Component } from 'react';
import Notation from './Notation';
import '../styles/Notation.css';

class App extends Component {
	render() {
		return (
			<div className="notationContainerWrapper">
				<Notation notationName="Degrees" changeNotation={this.props.changeNotation}/>
				<Notation notationName="Triads" changeNotation={this.props.changeNotation}/>
				<Notation notationName="7ths" changeNotation={this.props.changeNotation} isChecked={true}/>
			</div>
		);
	}
}

export default App;