import React, { useMemo } from 'react';
import DataGrid from 'react-data-grid';
import type { Column } from 'react-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { CSVData, Selectors, Actions, DataFilters } from '../../store/csv';
import { StyledDataGridHOF, FilterContainer, FilterInput } from './styles';

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
        <FilterInput type="text" value={p.value} placeholder="Filter" onChange={(e) => p.onChange(e.target.value)} />
    </FilterContainer>
);
FilterRenderer.displayName = 'FilterRenderer';

type DataTableProps = { className?: string };
const DataTable: React.FunctionComponent<DataTableProps> = ({ className }: DataTableProps) => {
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
        <DataGrid
            className={className}
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
    );
};

DataTable.displayName = 'DataTable';

export default StyledDataGridHOF(DataTable);
