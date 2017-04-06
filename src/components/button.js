import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';

class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			startDate: 0,
			init: 0,
			clocktimer: {}
		}

		this.increment = this.increment.bind(this);
		this.incrementData = this.incrementData.bind(this);
		this.findTIME = this.findTIME.bind(this);
		this.startTIME = this.startTIME.bind(this);
		this.clearFields = this.clearFields.bind(this);
	}

	increment(data) {
		store.dispatch({
			type: 'AddCounter',
			amount: data
		});
	}

	incrementData(data) {
		store.dispatch({
			type: 'AddData',
			amount: data
		});
	}

	startTIME() {
		let t = new Date().getTime() - this.state.startDate;
		let ms = t%1000;
		t -= ms;
		ms = Math.floor(ms/10);
		t = Math.floor (t/1000);
		let s = t%60; 
		t -= s;
		t = Math.floor (t/60);
		let m = t%60;
		t-=m;
		t = Math.floor (t/60);
		let h = t%60;
		if (h<10) h='0'+h;
		if (m<10) m='0'+m;
		if (s<10) s='0'+s;
		if (ms<10) ms='0'+ms;
		if (this.state.init === 1) {
			this.increment(`${h}:${m}:${s}.${ms}`);
		}
		this.setState({ clocktimer: setTimeout(this.startTIME, 10) });
	}

	clearFields() {
		this.setState({ init: 0 });
		clearTimeout(this.state.clocktimer);
	}

	findTIME() {
		if (this.state.init === 0) {
			this.setState({ startDate: new Date().getTime() });
			this.startTIME();
			this.setState({ init: 1 });
		}
		 else {
			const arr = [];
			const date = {};
			date.startDate = this.state.startDate;
		// 	var str = trim(document.clockform.label.value);
		// 	document.getElementById('marker').innerHTML = (str==''?'':str+': ') + 
		// 	document.clockform.clock.value + '<br>' + document.getElementById('marker').innerHTML;
			this.clearFields();
			this.incrementData(arr.push(this.state.date));
		}
	}

	render() {
		return (
			<button className='btn-counter' onClick={this.findTIME}>Start / Stop</button>
		);
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(Button);
