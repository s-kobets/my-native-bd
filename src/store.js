import {createStore} from 'redux';

const initialState = { counter: '00:00:00.00' };

function reducer(state = { counter: '00:00:00.00' }, action) {
  switch (action.type) {
    case 'AddCounter':
      return { counter: state.counter = action.amount }
    case 'AddData':
      return { counter: state.data.concat(action.amount) }
    case 'REMOVE':
      return { counter: state.counter = action.amount }
    default:
      return state;
  }
}

export default createStore(reducer, initialState);
