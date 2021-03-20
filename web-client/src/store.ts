import { combineReducers } from 'redux';
import ModalReducer, { ModalState } from './modals/store';

export type GlobalState = {
    modal: ModalState
};

const rootReducer = combineReducers({
    modal: ModalReducer
});

export default rootReducer;