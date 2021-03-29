import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import mySagas from './store/sagas';
import rootReducer from './store';

import App from './app';
import ModalManager from './modals/modal_manager';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Actions as CSVActions } from './store/csv';
import { Actions as MetaActions } from './store/meta';

const sagas = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagas)));
sagas.run(mySagas);

// Init app.
store.dispatch(CSVActions.getCSVData());
store.dispatch(MetaActions.getCSVMetaData());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <ModalManager />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
