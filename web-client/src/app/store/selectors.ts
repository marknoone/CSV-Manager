import { CSVMetaData } from '../../model';
import { GlobalState } from '../../store';

const getCSVMetaData = (state:GlobalState): CSVMetaData[] => state.meta.csvFiles;

export default {
    getCSVMetaData
};