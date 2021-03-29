import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import { DataTable } from './data-table';
import { DocumentHeader } from './doc-header';
import { Selectors } from '../store/app';
import { LoadingScreen } from './loading-screen';
import { FileViewingScreen } from './file-viewing-screen';
import { FooterBar } from './footer-bar';
import { Actions as CSVActions } from '../store/csv';

const DataViewer: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const { fileID }: any = useParams();

    useEffect(() => {
        dispatch(CSVActions.getCSVData(fileID));
    }, []);

    return (
        <>
            <DocumentHeader />
            <DataTable />
            <FooterBar />
        </>
    );
};

const App: React.FunctionComponent = () => {
    const isAppLoading = useSelector(Selectors.isAppLoading);
    return isAppLoading ? (
        <LoadingScreen />
    ) : (
        <Router>
            <Switch>
                <Route path="/:fileID" component={DataViewer} />
                <Route exact path="/" component={FileViewingScreen} />
            </Switch>
        </Router>
    );
};

export default App;
