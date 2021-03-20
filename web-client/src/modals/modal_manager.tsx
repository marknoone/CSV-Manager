import React, { useState } from 'react';
import { Modals, MODAL_MAP } from './modal_map';
import styled from 'styled-components';

const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0; 
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 240;
    text-align: center;
`; 

const Modal = styled.div`
    position: relative;
    background: white;
    border-radius: 6px;
    width: 40vw;
    height: 40vh;
    margin: auto;
    margin-top: 15vh;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
`; 

const ModalManager : React.FunctionComponent<any> = (mainProps) => {
    const props = { 
        message: "Hello world!",
        footerNote: "Testing notes....",
        onAccept: () => { console.log("Accept"); },
        onReject: () => { console.log("Reject"); },
    }

    const [currentModal, setCurrentModal] = useState<Modals | null>(Modals.ConfirmationPanel);
    if(!currentModal) return <></>;

    return <ModalContainer>
        <Modal>
            { MODAL_MAP[currentModal]({...props, closeModal: () => setCurrentModal(null)}) }
        </Modal>
    </ModalContainer>;
}

export default ModalManager;