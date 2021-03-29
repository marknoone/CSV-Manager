import CSVManagerReducer from './reducer';

export type CSVData = { [key: string]: any };

export type DataFilters = { [key: string]: string };

export type CSVDataState = {
    isFilterRowVisible: boolean;
    isDataLoading: boolean;
    filters: DataFilters;
    headers: string[];
    data: CSVData[];
    fileID: string;
};

export type CSVManagerAction = {
    type: string;
    payload: {
        fileID?: string;
        headers?: string[];
        data?: CSVData[];
        filters?: DataFilters;
        isDataLoading?: boolean;
        isFilterRowVisible?: boolean;
    };
};

export const GET_CSV_DATA = '@csv/GET_CSV_DATA';
export const SET_CSV_DATA = '@csv/SET_CSV_DATA';
export const SET_ACTIVE_FILE_ID = '@csv/SET_ACTIVE_FILE_ID';
export const SET_DATA_LOADING = '@csv/SET_DATA_LOADING';
export const SET_DATA_FILTERS = '@csv/SET_DATA_FILTERS';
export const SET_FILTER_ROW_VISIBILITY = '@csv/SET_FILTER_ROW_VISIBILITY';

export default CSVManagerReducer;
export { default as Actions } from './actions';
export { default as Selectors } from './selectors';
