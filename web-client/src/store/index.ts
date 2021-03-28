import { combineReducers } from 'redux';
import AppReducer, { AppState } from './app';
import ModalReducer, { ModalState } from './modals';
import CSVManagerReducer, { CSVMetaDataState } from './meta';
import CSVDataReducer, { CSVDataState } from './csv';

export type GlobalState = {
    app: AppState;
    meta: CSVMetaDataState;
    csv: CSVDataState;
    modal: ModalState;
};

const rootReducer = combineReducers({
    app: AppReducer,
    meta: CSVManagerReducer,
    csv: CSVDataReducer,
    modal: ModalReducer,
});

export default rootReducer;
