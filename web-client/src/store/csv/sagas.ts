import Papa from 'papaparse';
import type { CSVData } from '.';
import { GET_CSV_DATA, Actions, CSVManagerAction } from './';
import { put, takeLatest } from 'redux-saga/effects';

const EMPTY_VALUE = 'BLANK';
const csvParsingOptions = { header: true };

export function* parseCSVFile(action: CSVManagerAction) {
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

function* csvSagas() {
    yield takeLatest(GET_CSV_DATA, parseCSVFile);
}

export default csvSagas;
