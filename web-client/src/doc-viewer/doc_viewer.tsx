import React from 'react';
import { DocumentHeader } from './views/doc-header';
import { DocumentToolbar } from './views/doc-toolbar';

const DocumentViewer : React.FunctionComponent = () => {
    return <>
        <DocumentHeader />
        <DocumentToolbar />
    </>;
}

export default DocumentViewer;