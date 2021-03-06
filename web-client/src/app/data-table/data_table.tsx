import React, { useMemo } from 'react';
import styled from 'styled-components';
import DataGrid from 'react-data-grid';
import type { Column } from 'react-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { CSVData, Selectors, Actions, DataFilters } from '../../store/csv';
import NoResultsRenderer from './no_results';
import FilterRenderer from './filter_renderer';
import LoadingData from './loading_data';

type DataTableProps = { className?: string };
const DataTable: React.FunctionComponent<DataTableProps> = ({ className }: DataTableProps) => {
    const dispatch = useDispatch();
    const csvRows = useSelector(Selectors.getFilteredData);
    const csvHeaders = useSelector(Selectors.getCSVHeaders);
    const dataFilters = useSelector(Selectors.getDataFilters);
    const isFilterRowVisibile = useSelector(Selectors.isFilterRowVisibile);
    const isDataLoading = useSelector(Selectors.isCSVFileDataLoading);
    const setDataFilters = (filters: DataFilters) => dispatch(Actions.setDataFilters(filters));

    const reactDataGridFriendlyColumns = useMemo((): readonly Column<CSVData>[] => {
        return csvHeaders.map((header: string) => ({
            key: header,
            name: header,
            resizable: false,
            filterRenderer: FilterRenderer,
        }));
    }, [csvHeaders]);

    return isDataLoading ? (
        <LoadingData />
    ) : (
        <DataGrid
            className={'rdg-light ' + className}
            columns={reactDataGridFriendlyColumns}
            rows={csvRows}
            filters={dataFilters}
            onFiltersChange={setDataFilters}
            enableFilterRow={isFilterRowVisibile}
            emptyRowsRenderer={NoResultsRenderer}
            rowKeyGetter={(row: any) => row.id}
            onRowsChange={(data: any) => {
                dispatch(Actions.setCSVData([], data));
            }}
        />
    );
};

DataTable.displayName = 'DataTable';

const StyledDataTable = styled(DataTable)`
    background-color: #fff;
    height: calc(100vh - 112px);
    border: none;
    overflow-y: auto;
    overflow-x: hidden;
`;

export default StyledDataTable;
