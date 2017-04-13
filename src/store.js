import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import dataRef from './storeIndex.js';

const initialState = { 
	counter: '00:00:00',
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

export default createStore(reducer, composeWithDevTools());
