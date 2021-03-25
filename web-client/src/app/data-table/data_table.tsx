import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import DataGrid, { SelectColumn } from 'react-data-grid';
import type { Column } from 'react-data-grid';
import { CSVData } from '../../store/csv';
import { useDispatch, useSelector } from 'react-redux';
import { Selectors, Actions, DataFilters } from '../../store/csv';

const ReactDataGridContainer = styled.div`
    height: 100%;
`;

const LoadMoreRowsWrapper = styled.div`
    width: 180px;
    padding: 8px 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    color: white;
    line-height: 35px;
    background: rgba(0, 0, 0, 0.6);
`;

const EmptyRowsRenderer: React.FunctionComponent = () => {
    return <div style={{ textAlign: 'center' }}>Nothing to show <span lang="ja" title="ショボーン">(´・ω・`)</span></div>;
  }

interface DataTableProps {
    hasSelectColumn?: boolean
}

const DataTable : React.FunctionComponent<DataTableProps> = ({ hasSelectColumn }) => {
    const dispatch = useDispatch();
    const rows = useSelector(Selectors.getCurrentData);
    const dataFilters = useSelector(Selectors.getDataFilters);
    const isFilterRowVisibile = useSelector(Selectors.isFilterRowVisibile);
    const setDataFilters = (filters: DataFilters) => dispatch(Actions.setDataFilters(filters))
    const isLoading = useSelector(Selectors.isCSVFileDataLoading);
    const columns: readonly Column<CSVData>[] =  useSelector(Selectors.getReactDataGridColumns);

    const filteredRows = useMemo(() => {
        return rows.filter(r => {
            const filterKeys = Object.keys(dataFilters);
            return Object.keys(r).reduce((accum:boolean, columnKey: string) => {
                console.log(filterKeys)
                if(!filterKeys.includes(columnKey))
                    return accum;
                
                const val = "" + r[columnKey];
                const hasDataThatIncludesFilter = val.includes(dataFilters[columnKey]);
                return accum ? hasDataThatIncludesFilter : accum;
            }, true);
        });
      }, [rows, dataFilters]);
    

    return <ReactDataGridContainer>
        <DataGrid
            className="rdg-light"
            columns={columns}
            rows={filteredRows}
            filters={dataFilters}
            onFiltersChange={setDataFilters}
            enableFilterRow={isFilterRowVisibile}
            emptyRowsRenderer={EmptyRowsRenderer}
            rowKeyGetter={(row:any) => row.id}
            onRowsChange={(data: any) => {
                dispatch(Actions.setCSVData([], data))
            }}
        />
        {/* {isLoading && <LoadMoreRowsWrapper>Loading more rows...</LoadMoreRowsWrapper> */}
    </ReactDataGridContainer>;
}

export default DataTable;