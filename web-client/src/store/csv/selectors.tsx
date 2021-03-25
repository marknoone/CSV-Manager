import type { Column } from 'react-data-grid';
import { DataFilters } from './';
import { CSVData } from './';
import { GlobalState } from '..';
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
const isFilterRowVisibile = (state:GlobalState): boolean => state.csv.isFilterRowVisible;
const getDataFilters = (state:GlobalState): DataFilters => state.csv.filters;
const getCurrentData = (state:GlobalState): CSVData[] => state.csv.data;

const getReactDataGridColumns = (state:GlobalState): Column<CSVData>[] => {
    return state.csv.headers.map((header: string) => ({
        key: header, name: header, resizable: false,
        filterRenderer: (p:any) => (
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
    isFilterRowVisibile,
    isCSVFileDataLoading,
    getCurrentData,
    getDataFilters,
    getReactDataGridColumns
};