import React from 'react';
import { render } from 'react-dom';
import Container from './container.js';

class App extends React.Component {

    componentDidCatch() {
        return <div>OOOPSSS</div>;
    }

    render() {
        return <div>Componente</div>;
    }
} 

render(<App />, document.getElementById('react-app'));