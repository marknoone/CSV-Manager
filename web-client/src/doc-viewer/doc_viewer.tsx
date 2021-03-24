import React from 'react';
import { DataTable } from './views/data-table';
import { DocumentHeader } from './views/doc-header';

const DocumentViewer : React.FunctionComponent = () => {
    return <>
        <DocumentHeader />
        <DataTable />
    </>;
}

export default DocumentViewer;