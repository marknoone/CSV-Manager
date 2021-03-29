import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { render, screen } from '@testing-library/react';
import { Actions as AppActions } from '../store/app';
import '@testing-library/jest-dom/extend-expect';

import App from './app';
import mySagas from '../store/sagas';
import rootReducer from '../store';

function createReduxStore() {
    const sagas = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagas));
    sagas.run(mySagas);

    return store;
}

describe('Test App', () => {
    function renderApp(store = createReduxStore(), props = {}) {
        return render(
            <Provider store={store}>
                <App {...props} />
            </Provider>,
        );
    }

    test('and check loading screen disappears onLoad', () => {
        const store = createReduxStore();
        renderApp(store);

        // during loading, show app name and loading indicator
        expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
        expect(screen.getByTestId('loading-title')).toHaveTextContent('Loading CSV Application');

        store.dispatch(AppActions.setIsAppLoading(false));

        expect(screen.queryByTestId('loading-icon')).toBe(null);
    });
});
