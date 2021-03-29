import { all } from 'redux-saga/effects';
import CSVSagas from './csv/sagas';
import MetaSagas from './meta/sagas';
import AppSagas from './app/sagas';

export default function* rootSaga() {
    yield all([CSVSagas(), MetaSagas(), AppSagas()]);
    return;
}
