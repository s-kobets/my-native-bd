/* global _ */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			data: []
		}
	}

	render() {
		const dataB = [];
		if (this.props.store.data.length > 0) {
			let startDate = this.props.store.data[0].startDate;
			let endIndex = 0;

			const length = this.props.store.data.length;
			this.props.store.data.forEach((x,i) => {
				if (x.startDate !== startDate) {
					dataB.push({
						startDate: startDate, 
						length: i - endIndex 
					});
					endIndex = i;
					startDate = x.startDate;
				}
				if (i === length - 1) {
					dataB.push({
						startDate: startDate, 
						length: i - endIndex + 1
					});
				}
			});
		}
		console.log(dataB);
		return (
			<div>
				<ul className='list'>
					<li className='item'>
						<span> Время начала теста </span>
						<span> Кол-во записей </span>
					</li>
				</ul>
				<ul className='list'>
					{ dataB.map(this.itemLi, this) }
				</ul>
			</div>
		);
	}

	itemLi(item, index) {

		return (
			<li key={index} className='item'>
				<span> { item.startDate } </span>
				<span> { item.length } </span>
			</li>
		)
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({})
)(List);
