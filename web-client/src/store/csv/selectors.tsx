import { DataFilters } from './';
import { CSVData } from './';
import { GlobalState } from '..';

const isCSVFileDataLoading = (state: GlobalState): boolean => state.csv.isDataLoading;
const isFilterRowVisibile = (state: GlobalState): boolean => state.csv.isFilterRowVisible;
const getDataFilters = (state: GlobalState): DataFilters => state.csv.filters;
const getCSVHeaders = (state: GlobalState): string[] => state.csv.headers;
const getCurrentData = (state: GlobalState): CSVData[] => state.csv.data;

export default {
    isFilterRowVisibile,
    isCSVFileDataLoading,
    getCurrentData,
    getDataFilters,
    getCSVHeaders,
};
