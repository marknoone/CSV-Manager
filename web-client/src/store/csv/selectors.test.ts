import { GlobalState } from '..';
import * as _ from 'lodash';
import { DataFilters } from '.';
import { Selectors } from '.';

const SAMPLE_DATA_HEADERS = ['id', 'title', 'lastModified', 'fileSizeBytes'];
const SAMPLE_DATA = [
    { id: 1, title: 'CSV File 1', lastModified: 1616265832, fileSizeBytes: 100 },
    { id: 2, title: 'CSV File 2', lastModified: 1616265832, fileSizeBytes: 100 },
    { id: 3, title: 'CSV File 2', lastModified: 1616265832, fileSizeBytes: 1000 },
    { id: 4, title: 'CSV File 3', lastModified: 1616265832, fileSizeBytes: 200 },
];

const EMPTY_FILTERS: DataFilters = {
    id: '',
    title: '',
    lastModified: '',
    fileSizeBytes: '',
};

const getGlobalStateWithCSVFilters: (filters: DataFilters) => GlobalState = (filters: DataFilters) => ({
    app: { isAppLoading: false },
    meta: { csvMetaData: {} },
    modal: { isModalOpen: false, modalType: 0, modalProps: {} },
    csv: {
        isFilterRowVisible: false,
        isDataLoading: false,
        filters: filters,
        data: SAMPLE_DATA,
        headers: SAMPLE_DATA_HEADERS,
        fileID: '',
        fileUpload: {
            progress: 0.0,
            file: null,
        },
    },
});

describe('Test CSV Selectors', () => {
    test('and check empty filters', () => {
        const globalState = getGlobalStateWithCSVFilters(EMPTY_FILTERS);
        const data = Selectors.getFilteredData(globalState);
        expect(data).toEqual(SAMPLE_DATA);
    });

    test('and check basic filters', () => {
        const expectedData = [SAMPLE_DATA[1]];
        const customFilter: DataFilters = {
            ...EMPTY_FILTERS,
            id: '2',
        };

        const globalState = getGlobalStateWithCSVFilters(customFilter);
        const data = Selectors.getFilteredData(globalState);
        expect(data).toEqual(expectedData);
    });

    test('and check basic filters', () => {
        const expectedData = [SAMPLE_DATA[2]];
        const customFilter: DataFilters = {
            ...EMPTY_FILTERS,
            title: 'CSV File 2',
            fileSizeBytes: '1000',
        };

        const globalState = getGlobalStateWithCSVFilters(customFilter);
        const data = Selectors.getFilteredData(globalState);
        expect(data).toEqual(expectedData);
    });
});
