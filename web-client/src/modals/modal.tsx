import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ModalFooter from './modal_footer';
import ModalHeader from './modal_header';
import { Actions, Selectors } from '../store/modals';

const ModalPanel = styled.div`
    position: relative;
    background: white;
    border-radius: 6px;
    width: 35vw;
    margin: auto;
    margin-top: 15vh;
    padding-bottom: 64px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
`;

interface ModalProps {
    title?: string;
    children?: React.ReactNode;
}

const Modal: React.FunctionComponent<ModalProps> = ({ title, children }: ModalProps) => {
    const dispatch = useDispatch();
    const closeModal = () => dispatch(Actions.closeModal());
    const modalProps = useSelector(Selectors.getCurrrentModalProps);

    if (modalProps.onAccept) modalProps.onReject();

    return (
        <ModalPanel>
            <ModalHeader title={title ? title : 'Modal'} onCancel={closeModal} />
            {children}
            <ModalFooter
                {...modalProps}
                onCancel={() => {
                    if (modalProps.onReject) modalProps.onReject();
                    closeModal();
                }}
            />
        </ModalPanel>
    );
};

export default Modal;
