import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store';

ReactDOM.render(<App data={STORE} />, document.getElementById('root'));