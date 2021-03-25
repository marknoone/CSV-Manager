import ModalReducer from './reducer'
import { Modals } from '../../modals/modal_map';

export type ModalState = {
    isModalOpen: boolean

    modalType: Modals
    modalProps: any
}

export type ModalAction = {
    type: string
    payload:  { 
        type:  Modals
        props: any 
    }
}

export const OPEN_MODAL_ACTION = "@modal/OPEN_MODAL_ACTION";
export const CLOSE_MODAL_ACTION = "@modal/CLOSE_MODAL_ACTION";

export default ModalReducer;
export { default as Actions } from './actions';
export { default as Selectors } from './selectors';