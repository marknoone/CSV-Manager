import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FileViewingScreen from './file_viewing_screen';
import mySagas from '../../store/sagas';
import rootReducer from '../../store';
import { Actions as ModalActions } from '../../store/modals';
import { Modals } from '../../modals/modal_map';

function createReduxStore(storeState = {}) {
    const sagas = createSagaMiddleware();
    const store = createStore(rootReducer, storeState, applyMiddleware(sagas));
    sagas.run(mySagas);

    return store;
}

describe('Test File Viewing Screen', () => {
    test('and check the import row dispatches correct Modal.', () => {
        const store = createReduxStore();
        store.dispatch = jest.fn();

        render(
            <Provider store={store}>
                <FileViewingScreen />
            </Provider>,
        );

        const importRow = screen.getByTestId('import-file-row');
        fireEvent.click(importRow);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(ModalActions.showModal(Modals.ImportPanel, {}));
    });
});
