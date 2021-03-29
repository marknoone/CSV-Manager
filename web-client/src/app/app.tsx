import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DataTable } from './data-table';
import { DocumentHeader } from './doc-header';
import { Selectors } from '../store/app';
import { Actions as CSVActions } from '../store/csv';
import { Actions as MetaActions } from '../store/meta';
import { LoadingScreen } from './loading-screen';
import { FileViewingScreen } from './file-viewing-screen';
import { FooterBar } from './footer-bar';

const DataViewer: React.FunctionComponent = () => (
    <>
        <DocumentHeader />
        <DataTable />
        <FooterBar />
    </>
);

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const isAppLoading = useSelector(Selectors.isAppLoading);

    useEffect(() => {
        dispatch(CSVActions.getCSVData());
        dispatch(MetaActions.getCSVMetaData());
    }, []);

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
