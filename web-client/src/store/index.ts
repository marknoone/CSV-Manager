import { combineReducers } from 'redux';
import ModalReducer, { ModalState } from './modals';
import CSVManagerReducer, { CSVManagerState } from './meta';
import CSVDataReducer, { CSVDataState } from './csv';

export type GlobalState = {
    meta: CSVManagerState
    csv: CSVDataState,
    modal: ModalState
};

const rootReducer = combineReducers({
    meta: CSVManagerReducer,
    csv: CSVDataReducer,
    modal: ModalReducer
});

export default rootReducer;