import { Reducer } from 'redux';
import {
    CSVDataAction,
    CSVDataState,
    UPLOAD_CSV_FILE,
    SET_UPLOAD_PROGRESS,
    SET_FILTER_ROW_VISIBILITY,
    SET_CSV_DATA,
    SET_DATA_LOADING,
    SET_DATA_FILTERS,
    SET_ACTIVE_FILE_ID,
    GET_CSV_DATA,
} from './';

export const initialState = {
    isFilterRowVisible: true,
    isDataLoading: true,
    headers: [],
    filters: {},
    data: [],
    fileID: '',
    fileUpload: {
        progress: 0.0,
        file: null,
    },
};

const CSVManagerReducer: Reducer<CSVDataState, CSVDataAction> = (state = initialState, action) => {
    switch (action.type) {
        case GET_CSV_DATA:
            return {
                ...state,
                isDataLoading: true,
            };
        case UPLOAD_CSV_FILE:
            return action.payload.fileUpload === undefined
                ? state
                : {
                      ...state,
                      fileUpload: {
                          progress: 0.0,
                          file: action.payload.fileUpload,
                      },
                  };
        case SET_UPLOAD_PROGRESS:
            console.log('Upload progress!');
            return action.payload.loadingProgress === undefined
                ? state
                : {
                      ...state,
                      fileUpload: {
                          ...state.fileUpload,
                          progress: action.payload.loadingProgress,
                      },
                  };
        case SET_ACTIVE_FILE_ID:
            return action.payload.fileID === undefined
                ? state
                : {
                      ...state,
                      fileID: action.payload.fileID,
                  };
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
                      isDataLoading: false,
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
