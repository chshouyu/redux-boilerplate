import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import App from './App';

const store = configureStore();

const rootElement = document.querySelector('#container');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);