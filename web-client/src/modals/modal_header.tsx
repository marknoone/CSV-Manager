import React from 'react';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ModalHeaderProps = {
    title?: string;
    onCancel: () => void;
}

const ModalHeaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 64px;
    padding: 12px 24px;
    border-bottom: 1px solid #ddd;
    text-align: left;
`;

const ModalHeaderText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    font-size: 18px;
    margin: 0;
    line-height: 40px;
`;

const CloseButtonContainer = styled.span`
    position: absolute;
    right: 24px;
    top: 12px;
    color: #343434;
    cursor: pointer;
`;

const ModalHeader : React.FunctionComponent<ModalHeaderProps> = ({ title, onCancel }) => {
    return <ModalHeaderContainer>
        <ModalHeaderText>
            { title ? title : "Modal" }
            <CloseButtonContainer onClick={onCancel}>
                <FontAwesomeIcon icon={faTimes} size={'lg'} />
            </CloseButtonContainer>
        </ModalHeaderText>
    </ModalHeaderContainer>;
}

export default ModalHeader;