import React, { Component } from 'react';
import Key from './Key';
import '../styles/KeyContainer.css';

class App extends Component {
	render() {

		return (
			// keyValue = the value that will be shown in UI, keyName = name used for react data flow purposes
			<div className="keyContainerWrapper">
				<Key keyValue="C" keyName="C" isChecked={true} changeKey={this.props.changeKey}/>
				<Key keyValue="C#/Db" keyName="Db" changeKey={this.props.changeKey}/>
				<Key keyValue="D" keyName="D" changeKey={this.props.changeKey}/>
				<Key keyValue="D#/Eb" keyName="Eb" changeKey={this.props.changeKey}/>
				<Key keyValue="E" keyName="E" changeKey={this.props.changeKey}/>
				<Key keyValue="F" keyName="F" changeKey={this.props.changeKey}/>
				<Key keyValue="F#/Gb" keyName="Gb" changeKey={this.props.changeKey}/>
				<Key keyValue="G" keyName="G" changeKey={this.props.changeKey}/>
				<Key keyValue="G#/Ab" keyName="Ab" changeKey={this.props.changeKey}/>
				<Key keyValue="A" keyName="A" changeKey={this.props.changeKey}/>
				<Key keyValue="A#/Bb" keyName="Bb" changeKey={this.props.changeKey}/>
				<Key keyValue="B" keyName="B" changeKey={this.props.changeKey}/>
			</div>
		);
	}
}

export default App;
