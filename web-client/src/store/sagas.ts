import { all } from 'redux-saga/effects';
import AppSagas from './app/sagas';
import CSVSagas from './csv/sagas';
import MetaSagas from './meta/sagas';

export default function* rootSaga() {
    yield all([CSVSagas(), MetaSagas(), AppSagas()]);
    return;
}
