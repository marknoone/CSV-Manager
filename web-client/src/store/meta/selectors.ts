import { CSVMetaData } from './';
import { GlobalState } from '..';

const getCSVMetaData = (state: GlobalState): CSVMetaData[] =>
    Object.entries(state.meta.csvMetaData).map(([_, value]) => value);

export default {
    getCSVMetaData,
};
