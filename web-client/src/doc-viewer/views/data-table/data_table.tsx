import React, { useState } from 'react';
import styled from 'styled-components';
import { SelectColumn } from 'react-data-grid';
import type { Column } from 'react-data-grid';
import { CSVMetaData } from '../../../model';

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

const columns: readonly Column<CSVMetaData>[] = [
    SelectColumn,
    { key: "id", name: "ID", width:80},
    { key: "title", name: "Title", editable: true }
];
  
const rows: CSVMetaData[] = [
    { id: 0, title: "Task 1", createdAt: 1616265832, fileSizeKB: 1000, sourceURL: "http://www.google.com/" },
    { id: 1, title: "Task 2", createdAt: 1616265832, fileSizeKB: 1000, sourceURL: "http://www.google.com/" },
    { id: 2, title: "Task 3", createdAt: 1616265832, fileSizeKB: 1000, sourceURL: "http://www.google.com/" }
];

const DataTable : React.FunctionComponent = () => {
    const [rowData, setRowData] = useState(rows);
    const [selectedRows, setSelectedRows] = useState(() => new Set<React.Key>());
    const [isLoading, setIsLoading] = useState(false);

    return <>
        {/* <DataGrid<CSVMetaData>
            columns={columns}
            rows={rowData}
            rowKeyGetter={(row:any) => row.id}
            onRowsChange={setRowData}
            rowHeight={30}
            selectedRows={selectedRows}
            onSelectedRowsChange={setSelectedRows}
            className="fill-grid"
        /> */}
        {/* {isLoading && <LoadMoreRowsWrapper>Loading more rows...</LoadMoreRowsWrapper>} */}
    </>;
}

export default DataTable;