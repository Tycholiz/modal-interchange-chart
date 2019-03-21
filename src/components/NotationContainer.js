import React, { Component } from 'react';
import Notation from './Notation';
import '../styles/Notation.css';

class App extends Component {
	render() {
		return (
			<div className="notationContainerWrapper">
				<Notation notationName="Triads" changeNotation={this.props.changeNotation} isChecked={true}/>
				<Notation notationName="7ths" changeNotation={this.props.changeNotation}/>
			</div>
		);
	}
}

export default App;