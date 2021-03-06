import { GlobalState } from '..';
import { Modals } from '../../modals/modal_map';

const isModalOpen = (state: GlobalState): boolean => state.modal.isModalOpen;
const getCurrrentModal = (state: GlobalState): Modals => state.modal.modalType;
const getCurrrentModalProps = (state: GlobalState): any => state.modal.modalProps;

export default {
    isModalOpen,
    getCurrrentModal,
    getCurrrentModalProps,
};
