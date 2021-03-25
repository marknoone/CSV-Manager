import { Reducer } from 'redux';
import { SET_META_DATA, CSVManagerAction, CSVManagerState } from '.';

export const initialState = {
    csvFiles: [
        { id: 0, title: "CSV File 1", createdAt: 1616265832, fileSizeBytes: 10000, sourceURL: "http://www.google.com/" },
        { id: 1, title: "CSV File 2", createdAt: 1616265832, fileSizeBytes: 1000, sourceURL: "http://www.google.com/" },
        { id: 2, title: "CSV File 3", createdAt: 1616265832, fileSizeBytes: 100000, sourceURL: "http://www.google.com/" }
    ]
}
  
const CSVManagerReducer: Reducer<CSVManagerState, CSVManagerAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_META_DATA:
            return {
                ...state,
                csvFiles: action.payload.data
            }
      default:
        return state
    }
}

export default CSVManagerReducer;