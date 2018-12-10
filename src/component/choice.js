import React, { Component } from 'react';
export default class Choice extends Component {
	render() {
		return (
		    <div>
		        <form onClick = {this.props.apiSearch} >
		            <center>
		            <input type="button" name = 'SMALLdataSearch' value="Малая таблица" />
		            <input type="button" name = 'BIGdataSearch' value="Большая таблица" />
		            </center>
		        </form>
		    </div>
		);
	}
}