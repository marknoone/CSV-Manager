import { combineReducers } from 'redux';
import ModalReducer, { ModalState } from './modals/store';
import CSVManagerReducer, { CSVManagerState } from './app/store';

export type GlobalState = {
    meta: CSVManagerState
    modal: ModalState
};

const rootReducer = combineReducers({
    meta: CSVManagerReducer,
    modal: ModalReducer
});

export default rootReducer;