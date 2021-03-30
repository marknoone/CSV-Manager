import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import DocHeader from './doc_header';
import mySagas from '../../store/sagas';
import rootReducer from '../../store';
import { Actions as CSVActions } from '../../store/csv';

function createReduxStore(storeState = {}) {
    const sagas = createSagaMiddleware();
    const store = createStore(rootReducer, storeState, applyMiddleware(sagas));
    sagas.run(mySagas);

    return store;
}

describe('Test Document Header', () => {
    test('and check the app icon redirects to home.', () => {
        const store = createReduxStore();
        const history = createMemoryHistory();
        history.push = jest.fn();

        render(
            <Provider store={store}>
                <Router history={history}>
                    <DocHeader />
                </Router>
            </Provider>,
        );

        const appIcon = screen.getByTestId('app-icon');
        fireEvent.click(appIcon);

        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith('/');
    });

    test('and check document name changes with file.', () => {
        const store = createReduxStore({
            meta: {
                csvMetaData: {
                    '1': {
                        id: 1,
                        name: 'Test title',
                        lastModified: 0,
                        fileSizeBytes: 0,
                    },
                    '2': {
                        id: 2,
                        name: 'Test title 2',
                        lastModified: 0,
                        fileSizeBytes: 0,
                    },
                },
            },
            csv: {
                fileID: '1',
            },
        });

        render(
            <Provider store={store}>
                <Router history={createMemoryHistory()}>
                    <DocHeader />
                </Router>
            </Provider>,
        );

        const documentName = screen.getByTestId('document-name');
        expect(documentName).toHaveTextContent('Test title');

        store.dispatch(CSVActions.setActiveFileID('2'));
        console.log(store);
        expect(documentName).toHaveTextContent('Test title 2');
    });
});
