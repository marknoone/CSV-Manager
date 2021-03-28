import { SET_IS_APP_LOADING } from './';

const setIsAppLoading = (isAppLoading: boolean) => ({
    type: SET_IS_APP_LOADING,
    payload: {
        isAppLoading: isAppLoading,
    },
});

export default {
    setIsAppLoading,
};
