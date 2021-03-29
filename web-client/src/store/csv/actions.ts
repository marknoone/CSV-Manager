import {
    DataFilters,
    CSVData,
    UPLOAD_CSV_FILE,
    GET_CSV_DATA,
    SET_CSV_DATA,
    SET_DATA_FILTERS,
    SET_DATA_LOADING,
    SET_FILTER_ROW_VISIBILITY,
    SET_ACTIVE_FILE_ID,
    SET_UPLOAD_PROGRESS,
} from './';

const getCSVData = (id: string) => ({ type: GET_CSV_DATA, payload: { fileID: id } });

const uploadCSVFile = (file: File) => ({ type: UPLOAD_CSV_FILE, payload: { fileUpload: file } });

const setUploadProgress = (progress: number) => ({ type: SET_UPLOAD_PROGRESS, payload: { loadingProgress: progress } });

const setCSVData = (csvHeaders: string[], csvData: CSVData[]) => ({
    type: SET_CSV_DATA,
    payload: {
        headers: csvHeaders,
        data: csvData,
    },
});

const setActiveFileID = (id: string) => ({ type: SET_ACTIVE_FILE_ID, payload: { fileID: id } });

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
    uploadCSVFile,
    setUploadProgress,
    getCSVData,
    setCSVData,
    setActiveFileID,
    setDataIsLoading,
    setIsFilterRowVisibile,
    setDataFilters,
};
