import { Reducer } from 'redux';
import { CSVManagerAction, CSVDataState, SET_CSV_DATA, SET_DATA_LOADING, SET_ROW_KEYS, SET_DATA_FILTERS } from './';

export const initialState = {
    isDataLoading: false,
    selectedKeys: new Set<React.Key>(),
    headers: ["ID", "Title", "Value", "Time" ],
    dataFilters: {"ID": "", "Title": "tit", "Value": "", "Time": ""},
    data: [
        {"ID" : 1, "Title": "title", "Value": "value", "Time": "time"},
    ]
}
  
const CSVManagerReducer: Reducer<CSVDataState, CSVManagerAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_LOADING:
            return !action.payload.isDataLoading ? state : {
                ...state,
                isDataLoading: action.payload.isDataLoading
            }
        case SET_CSV_DATA:
            return !action.payload.data ? state : {
                ...state,
                currentFileData: action.payload.data
            }
        case SET_ROW_KEYS:
            return !action.payload.selectedKeys ? state : {
                ...state,
                selectedKeys: action.payload.selectedKeys
            }
        case SET_DATA_FILTERS:
            return !action.payload.filters ? state : {
                ...state,
                dataFilters: action.payload.filters
            }
      default:
        return state
    }
}

export default CSVManagerReducer;