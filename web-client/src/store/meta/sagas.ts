import { CSVMetaData } from '.';
import { BASE_URL } from '../../constants';
import { GET_META_DATA, Actions } from './';
import { channel } from 'redux-saga';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { Modals } from '../../modals/modal_map';
import { Actions as ModalActions } from '../modals';

export const csvMetaErrChannel = channel();
export function* downloadCSVFile() {
    const metaData: CSVMetaData[] = yield fetch(BASE_URL + '/meta')
        .then((response) => response.json())
        .catch((err) => {
            csvMetaErrChannel.put(err);
            return [];
        });

    const metaDataObj = metaData.reduce(
        (accum, meta: CSVMetaData) => ({
            ...accum,
            [meta.id]: meta,
        }),
        {},
    );

    yield put(Actions.setCSVMetaData(metaDataObj));
}

function* handleCsvMetaErrChannel(err: Error) {
    yield put(
        ModalActions.showModal(Modals.AlertPanel, {
            message: `An error has occured parsing your file.\nPlease try again later.\n ${err}`,
        }),
    );
}

function* metaSagas() {
    yield takeEvery(csvMetaErrChannel, handleCsvMetaErrChannel);
    yield takeLatest(GET_META_DATA, downloadCSVFile);
}

export default metaSagas;
