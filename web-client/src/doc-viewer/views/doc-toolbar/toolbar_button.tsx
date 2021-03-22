import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

type ToolbarButtonProps = {
    label: string;
    className?: string;
    onClick?: () => void; 
}

const ButtonLabel = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin: 0;
    line-height: 28px;
    padding-left: 8px;
`;

const ToolbarButton: React.FunctionComponent<ToolbarButtonProps> = ({ className, label, onClick }) => 
    <div className={className} onClick={() => onClick ? onClick() : null}>
        <ButtonLabel>{label}</ButtonLabel>
        <FontAwesomeIcon icon={faCaretDown} style={{
            position: 'absolute', top:'6px', right: '8px', color: '#666'}}/>
    </div>

const StyledToolbarButton = styled(ToolbarButton)`
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    background: none;
    border: none;
    user-select: none;

    transition: background .5s;

    &:hover {
        background: #ccc;
        border: 1px solid #ccc;
    }
`;

export default StyledToolbarButton;