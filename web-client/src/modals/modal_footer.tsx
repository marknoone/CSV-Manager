import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

interface ModalFooterProps {
    footerNote?: string;
    
    acceptText?: string
    onAccept?: () => void;
    
    cancelText?: string
    onClose?: () => void;
}

const FooterContainer = styled.div`
    position: relative;
    height: 64px;
    width: 100%;
    border-top: 1px solid #ddd;
    text-align: right;
    padding: 8px 16px;
`;

const FooterNoteContainer = styled.div`
    position: absolute;
    left: 16px;
    top: 18px;
`;

const FooterNoteIconContainer = styled.div`
    display: inline-block;
    text-align: center;
    width: 24px;
    height: 24px;
    color: #777;
`;

const FooterNote = styled.p`
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #777;
    padding-left: 16px;
    margin: 0;
`;

const FooterLayoutWrapper = styled.div`
    position: absolute;
    bottom:0;
    right: 0;
    left: 0;
`;

const Button = styled.button`
    padding: 8px 16px;
    border-radius: 6px;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    outline: 0;
    border: none;
    cursor: pointer;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    
    transform: scale(1.0);
    transition: transform 0.1s;
    &:active {
        transform: scale(0.9);
    }
`;

const AcceptButton = styled(Button)`
    background-color: #1dd1a1;
    margin-right: 8px;
`;

const CloseButton = styled(Button)`
    background-color: #ee5253;
`;

const ModalFooter : React.FunctionComponent<ModalFooterProps> = ({footerNote, acceptText, onAccept, cancelText, onClose}) => {
    return <FooterLayoutWrapper>
        <FooterContainer>
            {
                !footerNote ? null :
                (
                    <FooterNoteContainer>
                        <FooterNoteIconContainer>
                            <FontAwesomeIcon icon={faInfoCircle} size={'lg'}/>
                        </FooterNoteIconContainer>
                        <FooterNote>{ footerNote }</FooterNote>
                    </FooterNoteContainer>
                )
            }
            {
                !onAccept ? null :
                <AcceptButton onClick={onAccept}>
                    {acceptText ? acceptText : "Okay"}
                </AcceptButton>
            }
            {
                !onClose ? null :
                <CloseButton onClick={onClose}>
                    {cancelText ? cancelText : "Close"}    
                </CloseButton>
            }
        </FooterContainer>
    </FooterLayoutWrapper> ;
}

export default ModalFooter;