import { OPEN_MODAL_ACTION, CLOSE_MODAL_ACTION } from '.';
import { Modals } from '../../modals/modal_map';

const closeModal = () => ({ type: CLOSE_MODAL_ACTION });

const showModal = (modalType: Modals, modalProps: any) => ({
    type: OPEN_MODAL_ACTION,
    payload: {
        type: modalType,
        props: modalProps,
    },
});

export default {
    showModal,
    closeModal,
};
