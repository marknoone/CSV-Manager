import Papa from 'papaparse';
import type { CSVData } from '.';
import { GET_CSV_DATA, Actions } from './';
import { put, takeLatest } from 'redux-saga/effects';

const csvParsingOptions = { header: true };

function* parseCSVFile() {
    const parseCSV = Papa.parse<CSVData>(
        `ID,Title,CreatedAt,FilesizeBytes
0,CSV File 1,1616265832,10000
1,CSV File 2,1616265832,100
2,CSV File 3,1616265832,100000`,
        csvParsingOptions,
    );

    if (parseCSV.errors.length > 0) {
        console.log(parseCSV.errors);
        // TODO: Handle parsing errors...
    }

    const headers = Object.keys(parseCSV.data[0]);
    yield put(Actions.setCSVData(headers, parseCSV.data));
}

function* csvSagas() {
    yield takeLatest(GET_CSV_DATA, parseCSVFile);
}

export default csvSagas;
