import { CSVData } from '../../../../model';
import { DataFilters, SET_CSV_DATA, SET_DATA_FILTERS, SET_DATA_LOADING } from './';

const setCSVData = (csvData: CSVData) => ({
    type: SET_CSV_DATA,
    payload: {
        data: csvData
    }
});

const setDataIsLoading = (isLoading: boolean) => ({
    type: SET_DATA_LOADING,
    payload: {
        isDataLoading: isLoading
    }
});

const setSelectedKeys = (keys: Set<React.Key>) => ({
    type: SET_DATA_LOADING,
    payload: {
        selectedKeys: keys
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
    setSelectedKeys,
    setDataIsLoading,
    setDataFilters
}