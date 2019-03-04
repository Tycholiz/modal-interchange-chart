import React, { Component } from 'react';
import Key from './Key';
import '../styles/KeyContainer.css';

class App extends Component {
	render() {
		return (
			<div className="keyContainerWrapper">
				<Key keyName="C"/>
				<Key keyName="C#/Db"/>
				<Key keyName="D"/>
				<Key keyName="D#/Eb"/>
				<Key keyName="E"/>
				<Key keyName="F"/>
				<Key keyName="F#/Gb"/>
				<Key keyName="G"/>
				<Key keyName="G#/Ab"/>
				<Key keyName="A"/>
				<Key keyName="A#/Bb"/>
				<Key keyName="B"/>
			</div>
		);
	}
}

export default App;
