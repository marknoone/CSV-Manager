import { DataFilters } from './';
import { CSVData } from './';
import { GlobalState } from '..';

const isCSVFileDataLoading = (state: GlobalState): boolean => state.csv.isDataLoading;
const isFilterRowVisibile = (state: GlobalState): boolean => state.csv.isFilterRowVisible;
const getDataFilters = (state: GlobalState): DataFilters => state.csv.filters;
const getCSVHeaders = (state: GlobalState): string[] => state.csv.headers;
const getCurrentData = (state: GlobalState): CSVData[] => state.csv.data;
const getCurrentDataRowCount = (state: GlobalState): number => state.csv.data.length;
const getCurrentName = (state: GlobalState): string => {
    const activeFileMeta = state.meta.csvMetaData[state.csv.fileID];
    return activeFileMeta ? activeFileMeta.title : 'Untitled Document';
};

export default {
    isFilterRowVisibile,
    isCSVFileDataLoading,
    getCurrentDataRowCount,
    getCurrentData,
    getDataFilters,
    getCSVHeaders,
    getCurrentName,
};
