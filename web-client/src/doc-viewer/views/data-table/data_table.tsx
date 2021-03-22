import React from 'react';
import styled from 'styled-components';
import DataGrid, { SelectColumn } from 'react-data-grid';
import type { Column } from 'react-data-grid';
import { CSVData, CSVMetaData } from '../../../model';
import { useDispatch, useSelector } from 'react-redux';
import { Selectors, Actions } from './store';

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
  
const rows: CSVMetaData[] = [
    { id: 0, title: "Task 1", createdAt: 1616265832, fileSizeBytes: 1000, sourceURL: "http://www.google.com/" },
    { id: 1, title: "Task 2", createdAt: 1616265832, fileSizeBytes: 1000, sourceURL: "http://www.google.com/" },
    { id: 2, title: "Task 3", createdAt: 1616265832, fileSizeBytes: 1000, sourceURL: "http://www.google.com/" }
];

const EmptyRowsRenderer: React.FunctionComponent = () => {
    return <div style={{ textAlign: 'center' }}>Nothing to show <span lang="ja" title="ショボーン">(´・ω・`)</span></div>;
  }

interface DataTableProps {
    hasSelectColumn?: boolean
}

const DataTable : React.FunctionComponent<DataTableProps> = ({ hasSelectColumn }) => {
    const dispatch = useDispatch();
    const rows = useSelector(Selectors.getCurrentData);
    const selectedKeys = useSelector(Selectors.getSelectedKeys);
    const isLoading = useSelector(Selectors.isCSVFileDataLoading);
    const columns: readonly Column<CSVData>[] = [
        ...( hasSelectColumn ? [ SelectColumn ] : []),
        ...useSelector(Selectors.getReactDataGridColumns)
    ];

    return <ReactDataGridContainer>
        <DataGrid
            className="rdg-light"
            columns={columns}
            rows={rows}
            emptyRowsRenderer={EmptyRowsRenderer}
            rowKeyGetter={(row:any) => row.id}
            selectedRows={selectedKeys}
            onRowsChange={(data: any) => {
                dispatch(Actions.setCSVData(data))
            }}
            onSelectedRowsChange={(keys: Set<React.Key>) => {
                dispatch(Actions.setSelectedKeys(keys))
            }}
        />
        {/* {isLoading && <LoadMoreRowsWrapper>Loading more rows...</LoadMoreRowsWrapper> */}
    </ReactDataGridContainer>;
}

export default DataTable;