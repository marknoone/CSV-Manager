import { takeLatest } from 'redux-saga/effects';

function* appSagas() {
    yield takeLatest('', () => {
        console.log('Empty func');
    });
}

export default appSagas;
