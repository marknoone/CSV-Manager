import React, { useMemo } from 'react';
import DataGrid from 'react-data-grid';
import type { Column } from 'react-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { CSVData, Selectors, Actions, DataFilters } from '../../store/csv';
import { ReactDataGridContainer, FilterContainer, FilterInput } from './styles';

const EmptyRowsRenderer: React.FunctionComponent = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            Nothing to show{' '}
            <span lang="ja" title="ショボーン">
                (´・ω・`)
            </span>
        </div>
    );
};

const FilterRenderer: React.FunctionComponent = (p: any) => (
    <FilterContainer>
        <FilterInput type="text" value={p.value} onChange={(e) => p.onChange(e.target.value)} />
    </FilterContainer>
);
FilterRenderer.displayName = 'FilterRenderer';

const DataTable: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const csvRows = useSelector(Selectors.getCurrentData);
    const csvHeaders = useSelector(Selectors.getCSVHeaders);
    const dataFilters = useSelector(Selectors.getDataFilters);
    const isFilterRowVisibile = useSelector(Selectors.isFilterRowVisibile);
    const setDataFilters = (filters: DataFilters) => dispatch(Actions.setDataFilters(filters));

    const columns = useMemo((): readonly Column<CSVData>[] => {
        return csvHeaders.map((header: string) => ({
            key: header,
            name: header,
            resizable: false,
            filterRenderer: FilterRenderer,
        }));
    }, [csvHeaders]);

    const filteredRows = useMemo(() => {
        return csvRows.filter((r) => {
            const filterKeys = Object.keys(dataFilters);
            return Object.keys(r).reduce((accum: boolean, columnKey: string) => {
                console.log(filterKeys);
                if (!filterKeys.includes(columnKey)) return accum;

                const val = '' + r[columnKey];
                const hasDataThatIncludesFilter = val.includes(dataFilters[columnKey]);
                return accum ? hasDataThatIncludesFilter : accum;
            }, true);
        });
    }, [csvRows, dataFilters]);

    return (
        <ReactDataGridContainer>
            <DataGrid
                className="rdg-light"
                columns={columns}
                rows={filteredRows}
                filters={dataFilters}
                onFiltersChange={setDataFilters}
                enableFilterRow={isFilterRowVisibile}
                emptyRowsRenderer={EmptyRowsRenderer}
                rowKeyGetter={(row: any) => row.id}
                onRowsChange={(data: any) => {
                    dispatch(Actions.setCSVData([], data));
                }}
            />
        </ReactDataGridContainer>
    );
};

DataTable.displayName = 'DataTable';

export default DataTable;
