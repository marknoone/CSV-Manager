import { Reducer } from 'redux';
import { Modals } from '../modal_map';
import { OPEN_MODAL_ACTION, CLOSE_MODAL_ACTION, ModalAction, ModalState } from './';

export const initialState = {
    isModalOpen: true,
    modalType: Modals.ConfirmationPanel,
    modalProps: { 
        confirmationMessage: "Hello world!",
        footerNote: "Testing notes....",
        onAccept: () => { console.log("Accept"); },
        onReject: () => { console.log("Reject"); },
    }
}
  
const ModalReducer: Reducer<ModalState, ModalAction> = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_MODAL_ACTION:
        return {
            isModalOpen: true,
            modalProps: action.payload.props,
            modalType: action.payload.type,
        }
      case CLOSE_MODAL_ACTION:
        return {
          ...initialState,
          modalProps: {},
          isModalOpen: false
        }
      default:
        return state
    }
}

export default ModalReducer;