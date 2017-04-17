import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';
// import { fetchData } from './saga'
// import dataRef from './storeIndex.js';

// создаем saga мидлвар
// const sagaMiddleware = createSagaMiddleware();

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
		case 'FetchData':
			return { ...state, data: state.data.concat(action.amount) }
		case 'REMOVE':
			return { counter: state.counter = action.amount }
		default:
			return state;
	}
}

const store = createStore(reducer, composeWithDevTools());
// , applyMiddleware(sagaMiddleware)
// затем запускаем сагу
// sagaMiddleware.run(fetchData);

export default store;
