import AppReducer from './reducer';

export type AppState = {
    isAppLoading: boolean;
};

export type AppAction = {
    type: string;
    payload: {
        isAppLoading?: boolean;
    };
};

export const INIT_APP = '@app/INIT_APP';
export const SET_IS_APP_LOADING = '@app/SET_IS_APP_LOADING';

export default AppReducer;
export { default as Actions } from './actions';
export { default as Selectors } from './selectors';
