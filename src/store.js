import {createStore} from 'redux';
import {dateBD, dataRef} from './storeIndex.js';

console.log('store', dateBD);

const initialState = { 
	counter: '00:00:00.00',
	data: dateBD
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'AddCounter':
			return { ...state, counter: action.amount }
		case 'AddData':
			const arrNew = state.data.concat(action.amount);
			dataRef.set(arrNew);
			return { ...state, data: arrNew}
		case 'REMOVE':
			return { counter: state.counter = action.amount }
		default:
			return state;
	}
}

			// for (let i in this.props.store.data) {
			// 	objectStore.add(this.props.store.data[i]);
			// }

export default createStore(reducer, initialState);
