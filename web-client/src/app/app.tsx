import React from 'react';
import { DataTable } from './data-table';
import { DocumentHeader } from './doc-header';

const App: React.FunctionComponent = () => {
  return <>
      <DocumentHeader />
      <DataTable />
  </>;
}

export default App;
