import CSVManagerReducer from './reducer';

export type CSVMetaData = {
    id: number;
    title: string;
    lastModified: number;
    fileSizeBytes: number;
};

export type CSVMetaDataState = {
    csvMetaData: CSVMetaData[];
};

export type CSVMetaDataAction = {
    type: string;
    payload: {
        data: CSVMetaData[];
    };
};

export const GET_META_DATA = '@modal/GET_META_DATA';
export const SET_META_DATA = '@modal/SET_META_DATA';

export default CSVManagerReducer;
export { default as Actions } from './actions';
export { default as Selectors } from './selectors';
