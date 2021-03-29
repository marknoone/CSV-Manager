import Papa from 'papaparse';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { CSVData, UPLOAD_CSV_FILE } from '.';
import { GET_CSV_DATA, Actions, CSVDataAction } from './';
import { Actions as MetaActions } from '../meta';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import { channel } from 'redux-saga';

const EMPTY_VALUE = 'BLANK';
const csvParsingOptions = { header: true };

const fileUploadChannel = channel();

type ProgressObj = { loaded: number; total: number };
enum FileUploadChannelType {
    PROGRESS_UPDATE = 1,
    UPLOAD_COMPLETE,
}

type FileUploadChannelAction = {
    type: FileUploadChannelType;
    payload: {
        progress?: ProgressObj;
    };
};

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
            console.log(e);
        });
}

export function* watchUploadFileChannel(action: FileUploadChannelAction) {
    switch (action.type) {
        case FileUploadChannelType.PROGRESS_UPDATE:
            if (action.payload.progress) {
                const progressAmount = action.payload.progress.loaded / action.payload.progress.total;
                yield put(Actions.setUploadProgress(progressAmount));
            }
            break;
        case FileUploadChannelType.UPLOAD_COMPLETE:
            yield put(MetaActions.getCSVMetaData());
            break;
        default:
    }
}

function* csvSagas() {
    yield takeEvery(fileUploadChannel, watchUploadFileChannel);
    yield takeLatest(UPLOAD_CSV_FILE, uploadCSVFile);
    yield takeLatest(GET_CSV_DATA, parseCSVFile);
}

export default csvSagas;
