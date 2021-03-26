import { CSVMetaData } from './';
import { GlobalState } from '..';

const getCSVMetaData = (state: GlobalState): CSVMetaData[] => state.meta.csvMetaData;

export default {
    getCSVMetaData,
};
