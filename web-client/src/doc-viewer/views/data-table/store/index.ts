import CSVManagerReducer from './reducer'
import { CSVData } from '../../../../model';

export type CSVDataState = {
    isDataLoading: boolean;
    selectedKeys: Set<React.Key>;
    headers: string[];
    data: CSVData[];
}

export type CSVManagerAction = {
    type: string
    payload:  { 
        data?:  CSVData
        selectedKeys? : Set<React.Key>
        isDataLoading? : boolean
    }
}

export const SET_DATA_LOADING = "@modal/SET_DATA_LOADING";
export const SET_CSV_DATA = "@modal/SET_CSV_DATA";
export const SET_ROW_KEYS = "@modal/SET_ROW_KEYS";

export default CSVManagerReducer;
export { default as Actions } from './actions';
export { default as Selectors } from './selectors';