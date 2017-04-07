import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Button from './components/button.js';
import Counter from './components/counter.js';
import List from './components/list.js';

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
					</div>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>

					<Counter />
					<Button />
					<List />
				</div>
			</Provider>
		);
	}
}

export default App;
