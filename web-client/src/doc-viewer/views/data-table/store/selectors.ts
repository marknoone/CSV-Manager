import type { Column } from 'react-data-grid';
import { CSVData } from '../../../../model';
import { GlobalState } from '../../../../store';

const isCSVFileDataLoading = (state:GlobalState): boolean => state.csv.isDataLoading;
const getSelectedKeys = (state:GlobalState): Set<React.Key> => state.csv.selectedKeys;
const getCurrentData = (state:GlobalState): CSVData[] => state.csv.data;

const getReactDataGridColumns = (state:GlobalState): Column<CSVData>[] => {
    return state.csv.headers.map((header: string) => ({
        key: header, name: header, resizable: false,
    }));
}

export default {
    isCSVFileDataLoading,
    getCurrentData,
    getSelectedKeys,
    getReactDataGridColumns
};