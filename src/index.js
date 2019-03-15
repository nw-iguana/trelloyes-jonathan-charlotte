import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import data from './store';

ReactDOM.render(<App props={data} />, document.getElementById('root'));