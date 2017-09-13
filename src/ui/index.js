import React from 'react';
import { render } from 'react-dom';
import {Dashboard} from './components/Dashboard/index.js';

const App = (props) => {
    return <div><Dashboard /></div>;
}

render(<App />, document.getElementById('react-app'));