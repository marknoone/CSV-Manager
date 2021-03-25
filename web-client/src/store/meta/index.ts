import CSVManagerReducer from './reducer'

export type CSVMetaData = {
    id: number;
    title: string;
    createdAt: number;
    fileSizeBytes: number;
    sourceURL: string;
}


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