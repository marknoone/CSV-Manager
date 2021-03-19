import React from 'react';
import { DataTable } from './views/data-table';
import { DocumentHeader } from './views/doc-header';
import { DocumentToolbar } from './views/doc-toolbar';

const DocumentViewer : React.FunctionComponent = () => {
    return <>
        <DocumentHeader />
        <DocumentToolbar />
        <DataTable />
    </>;
}

export default DocumentViewer;