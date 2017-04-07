import {createStore} from 'redux';
import storeIndex from './storeIndex.js'

console.log(storeIndex.objectStore);

const initialState = { 
	counter: '00:00:00.00',
	data: []
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'AddCounter':
			return { ...state, counter: action.amount }
		case 'AddData':
			return { ...state, data: state.data.concat(action.amount) }
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
