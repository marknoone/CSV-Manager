import { INIT_APP, SET_IS_APP_LOADING } from './';

const initApp = () => ({ type: INIT_APP, payload: {} });

const setIsAppLoading = (isAppLoading: boolean) => ({
    type: SET_IS_APP_LOADING,
    payload: {
        isAppLoading: isAppLoading,
    },
});

export default {
    initApp,
    setIsAppLoading,
};
