import { DataFilters } from '.';
import { CSVData } from '.';
import { GlobalState } from '..';
import { createSelector } from 'reselect';

const isCSVFileDataLoading = (state: GlobalState): boolean => state.csv.isDataLoading;
const isFilterRowVisibile = (state: GlobalState): boolean => state.csv.isFilterRowVisible;
const getDataFilters = (state: GlobalState): DataFilters => state.csv.filters;
const getCSVHeaders = (state: GlobalState): string[] => state.csv.headers;
const getCurrentID = (state: GlobalState): string => state.csv.fileID;
const getCurrentDataRowCount = (state: GlobalState): number => state.csv.data.length;
const getUploadFileLoadProgress = (state: GlobalState): number => state.csv.fileUpload.progress;
const getUploadFile = (state: GlobalState): File | null => state.csv.fileUpload.file;
const getCurrentName = (state: GlobalState): string => {
    const activeFileMeta = state.meta.csvMetaData[state.csv.fileID];
    return activeFileMeta ? activeFileMeta.name : 'Untitled Document';
};

const getCurrentData = (state: GlobalState): CSVData[] => state.csv.data;
const getFilteredData = createSelector(getDataFilters, getCurrentData, (filters: DataFilters, data: CSVData[]) => {
    return data.filter((r) => {
        const filterKeys = Object.keys(filters);
        return Object.keys(r).reduce((accum: boolean, columnKey: string) => {
            if (!filterKeys.includes(columnKey)) return accum;

            const val = '' + r[columnKey];
            const hasDataThatIncludesFilter = val.includes(filters[columnKey]);
            return accum ? hasDataThatIncludesFilter : accum;
        }, true);
    });
});

export default {
    getUploadFileLoadProgress,
    getUploadFile,
    getCurrentID,
    isFilterRowVisibile,
    isCSVFileDataLoading,
    getCurrentDataRowCount,
    getCurrentData,
    getDataFilters,
    getCSVHeaders,
    getCurrentName,
    getFilteredData,
};
