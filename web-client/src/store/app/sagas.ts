import axios from 'axios';
import { BASE_URL } from '../../constants';
import { INIT_APP, Actions as AppActions } from './';
import { downloadCSVFile } from '../meta/sagas';
import { put, takeLatest, call } from 'redux-saga/effects';
import { Actions as ModalActions } from '../modals';
import { Modals } from '../../modals/modal_map';

function* initApp() {
    const isServerOnline: boolean = yield axios.get(`${BASE_URL}/ping`).then((response) => response.status === 200);
    if (!isServerOnline) {
        put(
            ModalActions.showModal(Modals.AlertPanel, {
                message: 'Server is not online. Please try again in a few minutes.',
            }),
        );
        return;
    }

    yield call(downloadCSVFile);

    // Can be removed, here to demonstrate loading screen.
    // yield delay(5000);

    yield put(AppActions.setIsAppLoading(false));
}

function* appSagas() {
    yield takeLatest(INIT_APP, initApp);
}

export default appSagas;
