import React, { useState } from 'react';
import { Modals, MODAL_MAP } from './modal_map';
import styled from 'styled-components';
import ModalHeader from './modal_header';
import ModalFooter from './modal_footer';

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

const ModalFooterLayoutWrapper = styled.div`
    position: absolute;
    bottom:0;
    right: 0;
    left: 0;
`;


const ModalManager : React.FunctionComponent = () => {
    const [currentModal, setCurrentModal] = useState<Modals | null>(Modals.AlertPanel);
    if(!currentModal) return <></>;

    return <ModalContainer>
        <Modal>
            <ModalHeader title="Modal" onClose={() => setCurrentModal(null)}/>
            { MODAL_MAP[currentModal] }
            <ModalFooterLayoutWrapper>
                <ModalFooter footerNote="Testing notes..." onClose={() => setCurrentModal(null)} onAccept={()=>{}}/>
            </ModalFooterLayoutWrapper>
        </Modal>
    </ModalContainer>;
}

export default ModalManager;