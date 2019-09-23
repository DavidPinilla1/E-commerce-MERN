import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store.js';
import reducer from './Redux/reducers/index';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
