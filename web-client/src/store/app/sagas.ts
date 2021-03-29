import { INIT_APP, Actions as AppActions } from './';
import { downloadCSVFile } from '../meta/sagas';
import { put, takeLatest, call } from 'redux-saga/effects';

function* initApp() {
    yield call(downloadCSVFile);

    // Can be removed, here to demonstrate loading screen.
    // yield delay(5000);

    yield put(AppActions.setIsAppLoading(false));
}

function* appSagas() {
    yield takeLatest(INIT_APP, initApp);
}

export default appSagas;
