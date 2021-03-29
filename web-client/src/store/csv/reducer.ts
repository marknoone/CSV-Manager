import { Reducer } from 'redux';
import {
    CSVManagerAction,
    CSVDataState,
    SET_FILTER_ROW_VISIBILITY,
    SET_CSV_DATA,
    SET_DATA_LOADING,
    SET_DATA_FILTERS,
} from './';

export const initialState = {
    isFilterRowVisible: true,
    isDataLoading: false,
    headers: [],
    filters: {},
    data: [],
    fileID: '',
};

const CSVManagerReducer: Reducer<CSVDataState, CSVManagerAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_ROW_VISIBILITY:
            return action.payload.isFilterRowVisible === undefined
                ? state
                : {
                      ...state,
                      isFilterRowVisible: action.payload.isFilterRowVisible,
                  };
        case SET_DATA_LOADING:
            return !action.payload.isDataLoading
                ? state
                : {
                      ...state,
                      isDataLoading: action.payload.isDataLoading,
                  };
        case SET_CSV_DATA:
            return action.payload.headers && action.payload.data
                ? {
                      ...state,
                      headers: action.payload.headers,
                      data: action.payload.data,
                      filters: action.payload.headers.reduce((accum, val) => ({ ...accum, [val]: '' }), {}),
                  }
                : state;
        case SET_DATA_FILTERS:
            return !action.payload.filters
                ? state
                : {
                      ...state,
                      filters: action.payload.filters,
                  };
        default:
            return state;
    }
};

export default CSVManagerReducer;
