import React, { Component } from 'react';
import Key from './Key';
import '../styles/KeyContainer.css';

class App extends Component {
	render() {
		return (
			<div className="keyContainerWrapper">
				<Key keyName="C" isChecked={true} currentKey={this.props.currentKey}/>
				<Key keyName="C#/Db" currentKey={this.props.currentKey}/>
				<Key keyName="D" currentKey={this.props.currentKey}/>
				<Key keyName="D#/Eb" currentKey={this.props.currentKey}/>
				<Key keyName="E" currentKey={this.props.currentKey}/>
				<Key keyName="F" currentKey={this.props.currentKey}/>
				<Key keyName="F#/Gb" currentKey={this.props.currentKey}/>
				<Key keyName="G" currentKey={this.props.currentKey}/>
				<Key keyName="G#/Ab" currentKey={this.props.currentKey}/>
				<Key keyName="A" currentKey={this.props.currentKey}/>
				<Key keyName="A#/Bb" currentKey={this.props.currentKey}/>
				<Key keyName="B" currentKey={this.props.currentKey}/>
			</div>
		);
	}
}

export default App;
