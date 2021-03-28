import { GlobalState } from '..';

const isAppLoading = (state: GlobalState): boolean => state.app.isAppLoading;

export default {
    isAppLoading,
};
