import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DataTable } from './data-table';
import { DocumentHeader } from './doc-header';
import { Actions } from '../store/csv';

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Actions.getCSVData());
    }, []);

    return (
        <>
            <DocumentHeader />
            <DataTable />
        </>
    );
};

export default App;
