import React, { Component } from 'react';
import Key from './Key';
import '../styles/KeyContainer.css';

class KeyContainer extends Component {
	render() {

		return (
			// keyValue = the value that will be shown in UI, keyName = name used for react data flow purposes
			<div className="keyContainerWrapper">
				<Key keyName="C" isChecked={true} changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyName="C#" changeKey={this.props.changeKey}/>
					<Key keyName="Db" changeKey={this.props.changeKey}/>
				</div>
				<Key keyName="D" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyName="D#" changeKey={this.props.changeKey}/>
					<Key keyName="Eb" changeKey={this.props.changeKey}/>
				</div>
				<Key keyName="E" changeKey={this.props.changeKey}/>
				<Key keyName="F" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyName="F#" changeKey={this.props.changeKey}/>
					<Key keyName="Gb" changeKey={this.props.changeKey}/>
				</div>
				<Key keyName="G" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyName="G#" changeKey={this.props.changeKey}/>
					<Key keyName="Ab" changeKey={this.props.changeKey}/>
				</div>
				<Key keyName="A" changeKey={this.props.changeKey}/>
				<div className="sharpFlatContainer">
					<Key keyName="A#" changeKey={this.props.changeKey}/>
					<Key keyName="Bb" changeKey={this.props.changeKey}/>
				</div>
				<Key keyName="B" changeKey={this.props.changeKey}/>
			</div>
		);
	}
}

export default KeyContainer;
