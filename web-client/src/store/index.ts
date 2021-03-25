import { combineReducers } from 'redux';
import ModalReducer, { ModalState } from './modals';
import CSVManagerReducer, { CSVMetaDataState } from './meta';
import CSVDataReducer, { CSVDataState } from './csv';

export type GlobalState = {
    meta: CSVMetaDataState
    csv: CSVDataState,
    modal: ModalState
};

const rootReducer = combineReducers({
    meta: CSVManagerReducer,
    csv: CSVDataReducer,
    modal: ModalReducer
});

export default rootReducer;