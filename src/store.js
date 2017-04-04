import {createStore} from 'redux';

const initialState = { counter: '00:00:00.00' };

function reducer(state = { counter: '00:00:00.00' }, action) {
  switch (action.type) {
    case 'ADD':
      return { counter: state.counter += action.amount }
    case 'REMOVE':
      return { counter: state.counter -= action.amount }
    default:
      return state;
  }
}

export default createStore(reducer, initialState);
