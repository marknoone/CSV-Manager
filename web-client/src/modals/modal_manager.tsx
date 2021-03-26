import React from 'react';
import { MODAL_MAP } from './modal_map';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Selectors } from '../store/modals';

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

const ModalManager: React.FunctionComponent = () => {
    const isModalShowing = useSelector(Selectors.isModalOpen);
    const currentModal = useSelector(Selectors.getCurrrentModal);
    if (!isModalShowing) return <></>;

    return <ModalContainer> {MODAL_MAP[currentModal]}</ModalContainer>;
};

export default ModalManager;
