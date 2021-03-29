import { CSVMetaData } from '.';
import { BASE_URL } from '../../constants';
import { GET_META_DATA, Actions } from './';
import { put, takeLatest } from 'redux-saga/effects';

export function* downloadCSVFile() {
    console.log('Get meta!');
    const metaData: CSVMetaData[] = yield fetch(BASE_URL + '/meta').then((response) => response.json());
    const metaDataObj = metaData.reduce(
        (accum, meta: CSVMetaData) => ({
            ...accum,
            [meta.id]: meta,
        }),
        {},
    );

    yield put(Actions.setCSVMetaData(metaDataObj));
}

function* metaSagas() {
    yield takeLatest(GET_META_DATA, downloadCSVFile);
}

export default metaSagas;
