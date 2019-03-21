import React, { Component } from 'react';
import Key from './Key';
import '../styles/KeyContainer.css';

class KeyContainer extends Component {
	render() {

		return (
			// keyValue = the value that will be shown in UI, keyName = name used for react data flow purposes
			<div className="keyContainerWrapper">
				<Key keyValue="C" keyName="C" isChecked={true} changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyValue="C#" keyName="C-sharp" changeKey={this.props.changeKey}/>
					<Key keyValue="Db" keyName="D-flat" changeKey={this.props.changeKey}/>
				</div>
				<Key keyValue="D" keyName="D" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyValue="D#" keyName="D-sharp" changeKey={this.props.changeKey}/>
					<Key keyValue="Eb" keyName="E-flat" changeKey={this.props.changeKey}/>
				</div>
				<Key keyValue="E" keyName="E" changeKey={this.props.changeKey}/>
				<Key keyValue="F" keyName="F" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyValue="F#" keyName="F-sharp" changeKey={this.props.changeKey}/>
					<Key keyValue="Gb" keyName="G-flat" changeKey={this.props.changeKey}/>
				</div>
				<Key keyValue="G" keyName="G" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyValue="G#" keyName="G-sharp" changeKey={this.props.changeKey}/>
					<Key keyValue="Ab" keyName="A-flat" changeKey={this.props.changeKey}/>
				</div>
				<Key keyValue="A" keyName="A" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyValue="A#" keyName="A-sharp" changeKey={this.props.changeKey}/>
					<Key keyValue="Bb" keyName="B-flat" changeKey={this.props.changeKey}/>
				</div>
				<Key keyValue="B" keyName="B" changeKey={this.props.changeKey}/>
			</div>
		);
	}
}

export default KeyContainer;
