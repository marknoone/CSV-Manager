import { combineReducers } from 'redux';
import ModalReducer, { ModalState } from './modals/store';
import CSVManagerReducer, { CSVManagerState } from './app/store';
import CSVDataReducer, { CSVDataState } from './doc-viewer/views/data-table/store';

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