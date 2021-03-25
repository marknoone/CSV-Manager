import { CSVMetaData, SET_META_DATA } from '.';

const setCSVMetaData = (csvMetaData: CSVMetaData[]) => ({
    type: SET_META_DATA,
    payload: {
        data: csvMetaData
    }
});

export default {
    setCSVMetaData,
}