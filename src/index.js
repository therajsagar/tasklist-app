import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, Provider } from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp);

ReactDOM.render(
    <Provider>
    <App store={store}/>
    </Provider>
    , document.getElementById('root'));
