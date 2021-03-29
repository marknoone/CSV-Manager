import {
    DataFilters,
    CSVData,
    GET_CSV_DATA,
    SET_CSV_DATA,
    SET_DATA_FILTERS,
    SET_DATA_LOADING,
    SET_FILTER_ROW_VISIBILITY,
} from './';

const getCSVData = () => ({ type: GET_CSV_DATA, payload: {} });

const setCSVData = (csvHeaders: string[], csvData: CSVData[]) => ({
    type: SET_CSV_DATA,
    payload: {
        headers: csvHeaders,
        data: csvData,
    },
});

const setIsFilterRowVisibile = (isFilterRowVisibile: boolean) => ({
    type: SET_FILTER_ROW_VISIBILITY,
    payload: {
        isFilterRowVisible: isFilterRowVisibile,
    },
});

const setDataIsLoading = (isLoading: boolean) => ({
    type: SET_DATA_LOADING,
    payload: {
        isDataLoading: isLoading,
    },
});

const setDataFilters = (dataFilters: DataFilters) => ({
    type: SET_DATA_FILTERS,
    payload: {
        filters: dataFilters,
    },
});

export default {
    getCSVData,
    setCSVData,
    setDataIsLoading,
    setIsFilterRowVisibile,
    setDataFilters,
};
