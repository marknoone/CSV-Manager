import { DataFilters, CSVData, SET_CSV_DATA, SET_DATA_FILTERS, SET_DATA_LOADING } from './';

const setCSVData = (csvData: CSVData) => ({
    type: SET_CSV_DATA,
    payload: {
        data: csvData
    }
});

const setIsFilterRowVisibile = (isFilterRowVisibile: boolean) => ({
    type: SET_DATA_LOADING,
    payload: {
        isFilterRowVisibile: isFilterRowVisibile
    }
});

const setDataIsLoading = (isLoading: boolean) => ({
    type: SET_DATA_LOADING,
    payload: {
        isDataLoading: isLoading
    }
});

const setDataFilters = (dataFilters: DataFilters) => ({
    type: SET_DATA_FILTERS,
    payload: {
        filters: dataFilters
    }
});

export default {
    setCSVData,
    setDataIsLoading,
    setIsFilterRowVisibile,
    setDataFilters
}