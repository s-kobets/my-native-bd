import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
	render() {
		return (
			<p className='counter'>{this.props.store.counter}</p>
		);
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(Counter);
