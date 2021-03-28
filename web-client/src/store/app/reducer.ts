import { Reducer } from 'redux';
import { AppAction, AppState, SET_IS_APP_LOADING } from './';

export const initialState = {
    isAppLoading: false,
};

const AppReducer: Reducer<AppState, AppAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_APP_LOADING:
            return !action.payload.isAppLoading
                ? state
                : {
                      ...state,
                      isAppLoading: action.payload.isAppLoading,
                  };
        default:
            return state;
    }
};

export default AppReducer;