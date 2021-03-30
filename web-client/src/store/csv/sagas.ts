import Papa from 'papaparse';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { CSVData, UPLOAD_CSV_FILE } from '.';
import { GET_CSV_DATA, Actions, CSVDataAction } from './';
import { Actions as ModalActions } from '../modals';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { Modals } from '../../modals/modal_map';
import { fileUploadChannel, watchUploadFileChannel, FileUploadChannelType, ProgressObj } from './file_upload_channel';

const EMPTY_VALUE = 'BLANK';
const csvParsingOptions: Papa.ParseConfig = {
    header: true,
    delimiter: ',',
    skipEmptyLines: true,
};

export function* parseCSVFile(action: CSVDataAction) {
    const parsedCSV: Papa.ParseResult<CSVData> = yield axios
        .get(`${BASE_URL}/csv/${action.payload.fileID}`)
        .then(function (response) {
            return Papa.parse<CSVData>(response.data, csvParsingOptions);
        });

    if (parsedCSV.errors.length > 0) {
        console.log(parsedCSV.errors);
        yield put(
            ModalActions.showModal(Modals.AlertPanel, {
                message: `An error has occured parsing your file.\nPlease try again later.\n ${parsedCSV.errors}`,
            }),
        );
        return;
    }

    const headers = Object.keys(parsedCSV.data[0]);
    const csvData = parsedCSV.data.map((row: CSVData) => {
        headers.forEach((header) => {
            row[header] = row[header] == '' ? EMPTY_VALUE : row[header];
        });
        return row;
    });

    if (action.payload.fileID) yield put(Actions.setActiveFileID(action.payload.fileID));
    yield put(Actions.setCSVData(headers, csvData));
}

function* uploadCSVFile(action: CSVDataAction) {
    if (!action.payload.fileUpload) return;

    const formData = new FormData();
    formData.append('file', action.payload.fileUpload);
    const requestConfig = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (p: ProgressObj) => {
            const fileUploadAction = {
                type: FileUploadChannelType.PROGRESS_UPDATE,
                payload: { progress: p },
            };

            fileUploadChannel.put(fileUploadAction);
        },
    };

    yield axios
        .post(BASE_URL + '/csv', formData, requestConfig)
        .then(() => {
            const fileUploadAction = {
                type: FileUploadChannelType.UPLOAD_COMPLETE,
                payload: {},
            };

            fileUploadChannel.put(fileUploadAction);
        })
        .catch((e: Error) => {
            const fileUploadAction = {
                type: FileUploadChannelType.UPLOAD_ERROR,
                payload: { error: e },
            };

            fileUploadChannel.put(fileUploadAction);
        });
}

function* csvSagas() {
    yield takeEvery(fileUploadChannel, watchUploadFileChannel);
    yield takeLatest(UPLOAD_CSV_FILE, uploadCSVFile);
    yield takeLatest(GET_CSV_DATA, parseCSVFile);
}

export default csvSagas;
