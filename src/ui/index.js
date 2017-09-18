import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import defStore from './components/Reducers';
import Dashboard from './components/Dashboard/index.js';

let store = compose(applyMiddleware(thunk))(createStore)(defStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = (props) => {
    return <Provider store={store}>
        <Dashboard />
    </Provider>;
}

render(<App />, document.getElementById('react-app'));