import {createStore} from 'redux';

const initialState = { counter: 0 };

function reducer(state = { counter: 0 }, action) {
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
