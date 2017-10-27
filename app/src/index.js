import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'
import store from './ducks/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
, document.getElementById('root'));
registerServiceWorker();
