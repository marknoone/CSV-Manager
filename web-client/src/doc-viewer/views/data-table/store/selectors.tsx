import type { Column } from 'react-data-grid';
import { DataFilters } from '.';
import { CSVData } from '../../../../model';
import { GlobalState } from '../../../../store';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  height: inherit;
  align-items: center;
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 4px;
  font-size: 14px;
`;

const isCSVFileDataLoading = (state:GlobalState): boolean => state.csv.isDataLoading;
const getSelectedKeys = (state:GlobalState): Set<React.Key> => state.csv.selectedKeys;
const getDataFilters = (state:GlobalState): DataFilters => state.csv.dataFilters;
const getCurrentData = (state:GlobalState): CSVData[] => state.csv.data;

const getReactDataGridColumns = (state:GlobalState): Column<CSVData>[] => {
    return state.csv.headers.map((header: string) => ({
        key: header, name: header, resizable: false,
        filterRenderer: p => (
            <FilterContainer>
                <FilterInput
                type="text"
                value={p.value}
                onChange={e => p.onChange(e.target.value)}
                />
            </FilterContainer>
        )
    }));
}

export default {
    isCSVFileDataLoading,
    getCurrentData,
    getDataFilters,
    getSelectedKeys,
    getReactDataGridColumns
};