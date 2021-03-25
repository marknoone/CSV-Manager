import type { CSVData} from '.';
import { BASE_URL } from '../../constants';
import { GET_CSV_DATA, Actions } from './';
import { put, takeLatest } from 'redux-saga/effects';

function* downloadCSVFile() {
    const csvData : CSVData[] = [
        { id: 0, title: "CSV File 1", createdAt: 1616265832, fileSizeBytes: 10000 },
        { id: 1, title: "CSV File 2", createdAt: 1616265832, fileSizeBytes: 1000 },
        { id: 2, title: "CSV File 3", createdAt: 1616265832, fileSizeBytes: 100000 }
    ];
    
    yield put(Actions.setCSVData(csvData));
}

function* csvSagas() {
    yield takeLatest(GET_CSV_DATA, downloadCSVFile)
}

export default csvSagas