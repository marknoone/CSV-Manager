import React from 'react';
import styled from 'styled-components';
import ModalHeader from '../modal_header';
import ModalFooter from '../modal_footer';

export interface ConfimationPanelProps {
    message: string;
    closeModal: () => void;
    onReject: () =>  void;
    onAccept: () => void;
}

const ConfirmationTextContainer = styled.div`
    padding: 16px 24px;
    text-align: left;
`;

const ConfirmationText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #343434;
    height: 100%;
    width: 100%;
`;

const ErrConfirmationText = styled(ConfirmationText)`
    color: #d63031
`;

const ConfirmationPanel : React.FunctionComponent<ConfimationPanelProps> = ({ message, closeModal, onReject, ...props }) => {
    return  <>    
                <ModalHeader title="Confirmation Panel" onClose={closeModal}/>
                <ConfirmationTextContainer>
                    {   
                        message ? 
                        <ConfirmationText>{ message }</ConfirmationText> : 
                        <ErrConfirmationText>Err: No message passed.</ErrConfirmationText> 
                    }
                </ConfirmationTextContainer>
                <ModalFooter {...props} onClose={() => {
                    onReject();
                    closeModal();
                }}/>
            </>;
}

export default ConfirmationPanel;