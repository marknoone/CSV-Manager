import { GET_META_DATA, Actions } from './';
import { put, takeLatest } from 'redux-saga/effects';

function* downloadCSVFile() {
    // const metaData : CSVMetaData[] = yield fetch(BASE_URL + "/meta")
    //     .then(response => response.json());

    const metaData = {
        '0': { id: 0, title: 'CSV File 1', lastModified: 1616265832, fileSizeBytes: 10000 },
        '1': { id: 1, title: 'CSV File 2', lastModified: 1616265832, fileSizeBytes: 1000 },
        '2': { id: 2, title: 'CSV File 3', lastModified: 1616265832, fileSizeBytes: 100000 },
    };

    yield put(Actions.setCSVMetaData(metaData));
}

function* metaSagas() {
    yield takeLatest(GET_META_DATA, downloadCSVFile);
}

export default metaSagas;
