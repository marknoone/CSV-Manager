import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FooterBar from './footer_bar';
import mySagas from '../../store/sagas';
import rootReducer from '../../store';
import { Actions as CSVActions } from '../../store/csv';

function createReduxStore(storeState = {}) {
    const sagas = createSagaMiddleware();
    const store = createStore(rootReducer, storeState, applyMiddleware(sagas));
    sagas.run(mySagas);

    return store;
}

describe('Test Footer Bar', () => {
    test('and check the results row updates.', async () => {
        const store = createReduxStore();
        render(
            <Provider store={store}>
                <FooterBar />
            </Provider>,
        );

        expect(screen.getByTestId('footer-results')).toHaveTextContent('0 Rows Found.');

        store.dispatch(
            CSVActions.setCSVData(
                ['id', 'title'],
                [
                    { id: '1', title: 'Test 1' },
                    { id: '2', title: 'Test 2' },
                ],
            ),
        );

        expect(screen.getByTestId('footer-results')).toHaveTextContent('2 Rows Found.');
    });

    test('and check our toggle dispatches filter visibility actions.', () => {
        const store = createReduxStore();
        store.dispatch = jest.fn();

        render(
            <Provider store={store}>
                <FooterBar />
            </Provider>,
        );

        const filterToggle = screen.getByTestId('footer-filter-toggle');
        fireEvent.click(filterToggle);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(CSVActions.setIsFilterRowVisibile(false));
    });
});
