import { CSVMetaData } from './';
import { GlobalState } from '..';

const getCSVMetaData = (state: GlobalState): CSVMetaData[] =>
    Object.keys(state.meta.csvMetaData).map((key) => state.meta.csvMetaData[key]);

export default {
    getCSVMetaData,
};
