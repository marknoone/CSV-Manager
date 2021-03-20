import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ModalFooter, { ModalFooterProps } from './modal_footer';
import ModalHeader, { ModalHeaderProps } from './modal_header';
import { Actions, Selectors } from './store';

const ModalPanel = styled.div`
    position: relative;
    background: white;
    border-radius: 6px;
    width: 40vw;
    height: 40vh;
    margin: auto;
    margin-top: 15vh;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
`; 

const Modal : React.FunctionComponent = ({ children }) => {
    const dispatch = useDispatch();
    const closeModal = () => dispatch(Actions.closeModal());
    const modalProps = useSelector(Selectors.getCurrrentModalProps);
    console.log(modalProps);
    if(modalProps.onAccept)
        modalProps.onReject();

    return <ModalPanel>
        <ModalHeader title={modalProps.title} onCancel={closeModal} />
            { children }
        <ModalFooter {...modalProps} onCancel={() => {
            if(modalProps.onReject)
                modalProps.onReject();
            // closeModal();
        }}/>
    </ModalPanel>;
}

export default Modal;