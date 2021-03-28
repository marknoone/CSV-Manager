import CSVManagerReducer from './reducer';

export type AppState = {
    isAppLoading: boolean;
};

export type AppAction = {
    type: string;
    payload: {
        isAppLoading?: boolean;
    };
};

export const SET_IS_APP_LOADING = '@app/SET_IS_APP_LOADING';

export default CSVManagerReducer;
export { default as Actions } from './actions';
export { default as Selectors } from './selectors';
