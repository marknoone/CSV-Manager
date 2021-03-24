import CSVManagerReducer from './reducer'
import { CSVData } from '../../../../model';

export type DataFilters = { [key:string]: string }

export type CSVDataState = {
    isDataLoading: boolean;
    selectedKeys: Set<React.Key>;
    dataFilters: DataFilters;
    headers: string[];
    data: CSVData[];
}

export type CSVManagerAction = {
    type: string
    payload:  { 
        data?:  CSVData
        filters? : DataFilters
        selectedKeys? : Set<React.Key>
        isDataLoading? : boolean
    }
}

export const SET_DATA_LOADING = "@data/SET_DATA_LOADING";
export const SET_CSV_DATA = "@data/SET_CSV_DATA";
export const SET_ROW_KEYS = "@data/SET_ROW_KEYS";
export const SET_DATA_FILTERS = "@data/SET_DATA_FILTERS";

export default CSVManagerReducer;
export { default as Actions } from './actions';
export { default as Selectors } from './selectors';