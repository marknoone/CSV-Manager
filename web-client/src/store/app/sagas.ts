import { INIT_APP, Actions as AppActions } from './';
import { downloadCSVFile } from '../meta/sagas';
import { put, takeLatest, call } from 'redux-saga/effects';

function* initApp() {
    yield call(downloadCSVFile);
    console.log('Meta data finished.');

    yield put(AppActions.setIsAppLoading(false));
}

function* appSagas() {
    yield takeLatest(INIT_APP, initApp);
}

export default appSagas;
