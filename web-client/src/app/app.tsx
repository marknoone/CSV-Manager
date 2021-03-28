import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from './data-table';
import { DocumentHeader } from './doc-header';
import { Selectors } from '../store/app';
import { Actions } from '../store/csv';
import { LoadingScreen } from './loading-screen';

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const isAppLoading = useSelector(Selectors.isAppLoading);

    useEffect(() => {
        dispatch(Actions.getCSVData());
    }, []);

    return isAppLoading ? (
        <LoadingScreen />
    ) : (
        <>
            <DocumentHeader />
            <DataTable />
        </>
    );
};

export default App;
