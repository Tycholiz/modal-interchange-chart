import React, { Component } from 'react';
import Notation from './Notation';
import '../styles/Notation.css';

class App extends Component {
	render() {
		return (
			<div className="notationContainerWrapper">
				<Notation notationName="Degrees"/>
				<Notation notationName="Triads"/>
				<Notation notationName="Sevenths"/>
			</div>
		);
	}
}

export default App;
