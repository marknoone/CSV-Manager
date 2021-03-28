import { CSVMetaData, GET_META_DATA, SET_META_DATA } from '.';

const getCSVMetaData = () => ({
    type: GET_META_DATA,
    payload: {},
});

const setCSVMetaData = (csvMetaData: { [fileID: string]: CSVMetaData }) => ({
    type: SET_META_DATA,
    payload: {
        csvMetaData: csvMetaData,
    },
});

export default {
    getCSVMetaData,
    setCSVMetaData,
};
