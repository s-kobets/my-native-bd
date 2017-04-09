import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import dataRef from '../storeIndex.js';

class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dateBD: {},
			init: 0,
			clocktimer: {}
		}

		this.increment = this.increment.bind(this);
		this.incrementData = this.incrementData.bind(this);
		this.findTIME = this.findTIME.bind(this);
		this.startTIME = this.startTIME.bind(this);
		this.clearFields = this.clearFields.bind(this);
		this.removeData = this.removeData.bind(this);
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
		let t = new Date().getTime() - this.state.dateBD.startDate;
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
			this.setState({ dateBD: { ...this.state.dateBD, time: `${h}:${m}:${s}.${ms}` }});
			this.location();
			this.increment(this.state.dateBD.time);
			this.incrementData(this.state.dateBD);
		}
		this.setState({ clocktimer: setTimeout(this.startTIME, 10) });
	}

	clearFields() {
		this.setState({ init: 0 });
		clearTimeout(this.state.clocktimer);
	}

	findTIME() {
		if (this.state.init === 0) {
			this.setState({ dateBD: { ...this.state.dateBD, startDate: new Date().getTime() }});
			this.startTIME();
			this.setState({ init: 1 });
		}
		 else {
		 	console.log(this.props.store.data.length)
			dataRef.then(result => {
				result.set(this.props.store.data);
			});
			this.clearFields();
		}
	}

	location() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				// Текущие координаты.
				this.setState({ dateBD: { ...this.state.dateBD, lat: position.coords.latitude }});
				this.setState({ dateBD: { ...this.state.dateBD, log: position.coords.longitude }});
			});
		}
	}

	removeData() {
		dataRef.then(result => {
			result.remove();
		});
	}

	render() {
		return (
			<div>
				<button className='btn-counter' onClick={this.findTIME}>Start / Stop</button>
				<button className='btn-counter' onClick={this.removeData}>Remove Data</button>
			</div>
		);
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(Button);
