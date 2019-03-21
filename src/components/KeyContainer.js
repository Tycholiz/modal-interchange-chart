import React, { Component } from 'react';
import Key from './Key';
import '../styles/KeyContainer.css';

class App extends Component {
	render() {

		return (
			// keyValue = the value that will be shown in UI, keyName = name used for react data flow purposes
			<div className="keyContainerWrapper">
				<Key keyValue="C" keyName="C" isChecked={true} changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyValue="C#" keyName="Db" changeKey={this.props.changeKey}/>
					<Key keyValue="Db" keyName="Db" changeKey={this.props.changeKey}/>
				</div>
				<Key keyValue="D" keyName="D" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyValue="D#" keyName="Eb" changeKey={this.props.changeKey}/>
					<Key keyValue="Eb" keyName="Eb" changeKey={this.props.changeKey}/>
				</div>
				<Key keyValue="E" keyName="E" changeKey={this.props.changeKey}/>
				<Key keyValue="F" keyName="F" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyValue="F#" keyName="Gb" changeKey={this.props.changeKey}/>
					<Key keyValue="Gb" keyName="Gb" changeKey={this.props.changeKey}/>
				</div>
				<Key keyValue="G" keyName="G" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyValue="G#" keyName="Ab" changeKey={this.props.changeKey}/>
					<Key keyValue="Ab" keyName="Ab" changeKey={this.props.changeKey}/>
				</div>
				<Key keyValue="A" keyName="A" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyValue="A#" keyName="Bb" changeKey={this.props.changeKey}/>
					<Key keyValue="Bb" keyName="Bb" changeKey={this.props.changeKey}/>
				</div>
				<Key keyValue="B" keyName="B" changeKey={this.props.changeKey}/>
			</div>
		);
	}
}

export default App;
