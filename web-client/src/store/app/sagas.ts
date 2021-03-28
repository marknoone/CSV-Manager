import { takeLatest } from 'redux-saga/effects';

function* appSagas() {
    yield takeLatest('hello', () => {
        console.log('Empty func');
    });
}

export default appSagas;
