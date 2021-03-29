import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DataTable } from './data-table';
import { DocumentHeader } from './doc-header';
import { Selectors } from '../store/app';
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
