import CSVManagerReducer from './reducer'
import { CSVMetaData } from '../../model';

export type CSVManagerState = {
    csvFiles: CSVMetaData[];
}

export type CSVManagerAction = {
    type: string
    payload:  { 
        data:  CSVMetaData[]
    }
}

export const SET_META_DATA = "@modal/SET_META_DATA";

export default CSVManagerReducer;
export { default as Actions } from './actions';
export { default as Selectors } from './selectors';