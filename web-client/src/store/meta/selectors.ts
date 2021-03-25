import { CSVMetaData } from './';
import { GlobalState } from '..';

const getCSVMetaData = (state:GlobalState): CSVMetaData[] => state.meta.csvFiles;

export default {
    getCSVMetaData,
};