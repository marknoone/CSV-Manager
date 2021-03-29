import Papa from 'papaparse';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { CSVData, UPLOAD_CSV_FILE } from '.';
import { GET_CSV_DATA, Actions, CSVDataAction } from './';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { channel } from 'redux-saga';

const fileUploadChannel = channel();

const EMPTY_VALUE = 'BLANK';
const csvParsingOptions = { header: true };

type ProgressObj = { loaded: number; total: number };

export function* parseCSVFile(action: CSVDataAction) {
    if (action.payload.fileID) yield put(Actions.setActiveFileID(action.payload.fileID));

    const parseCSV = Papa.parse<CSVData>(
        `ID,Title,CreatedAt,FilesizeBytes
0,CSV File 1,,10000
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
1,CSV File 2,1616265832,100
2,CSV File 3,1616265832,100000`,
        csvParsingOptions,
    );

    if (parseCSV.errors.length > 0) {
        alert(parseCSV.errors);
        return;
    }

    const headers = Object.keys(parseCSV.data[0]);
    const csvData = parseCSV.data.map((row: CSVData) => {
        headers.forEach((header) => {
            row[header] = row[header] == '' ? EMPTY_VALUE : row[header];
        });
        return row;
    });

    yield put(Actions.setCSVData(headers, csvData));
}

function* uploadCSVFile(action: CSVDataAction) {
    if (!action.payload.fileUpload) return;

    const formData = new FormData();
    formData.append('file', action.payload.fileUpload);
    const requestConfig = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (p: ProgressObj) => fileUploadChannel.put(p),
    };

    yield axios
        .post(BASE_URL + '/csv', formData, requestConfig)
        .then((data) => {
            console.log(data);
        })
        .catch((e: Error) => {
            console.log(e);
        });
}

export function* watchDownloadFileChannel(progress: ProgressObj) {
    yield put(Actions.setUploadProgress(progress.loaded / progress.total));
}

function* csvSagas() {
    yield takeEvery(fileUploadChannel, watchDownloadFileChannel);
    yield takeLatest(UPLOAD_CSV_FILE, uploadCSVFile);
    yield takeLatest(GET_CSV_DATA, parseCSVFile);
}

export default csvSagas;
