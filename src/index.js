import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './root'
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
)

const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
