import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from '../modal';
import { Selectors } from '../../store/modals';

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
    color: #d63031;
`;

const ConfirmationPanel: React.FunctionComponent = () => {
    const modalProps = useSelector(Selectors.getCurrrentModalProps);

    return (
        <Modal>
            <ConfirmationTextContainer>
                {modalProps.confirmationMessage ? (
                    <ConfirmationText>{modalProps.confirmationMessage}</ConfirmationText>
                ) : (
                    <ErrConfirmationText>Err: No message passed.</ErrConfirmationText>
                )}
            </ConfirmationTextContainer>
        </Modal>
    );
};

export default ConfirmationPanel;
