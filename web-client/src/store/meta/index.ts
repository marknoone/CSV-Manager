import CSVManagerReducer from './reducer';

export type CSVMetaData = {
    id: number;
    name: string;
    lastModified: string;
    createdAt: string;
};

export type CSVMetaDataState = {
    csvMetaData: {
        [fileID: string]: CSVMetaData;
    };
};

export type CSVMetaDataAction = {
    type: string;
    payload: {
        csvMetaData: { [fileID: string]: CSVMetaData };
    };
};

export const GET_META_DATA = '@meta/GET_META_DATA';
export const SET_META_DATA = '@meta/SET_META_DATA';

export default CSVManagerReducer;
export { default as Actions } from './actions';
export { default as Selectors } from './selectors';
