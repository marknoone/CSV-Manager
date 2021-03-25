import React from 'react';
import styled from 'styled-components';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type BurgerMenuButtonProps = {
    className?: string;
    onClick?: () => void;
}

const BurgerMenuButton: React.FunctionComponent<BurgerMenuButtonProps> = ({ className, onClick }) => 
    <div className={className} onClick={() => onClick ? onClick() : null }>
        <FontAwesomeIcon icon={faBars} size="lg"/>
    </div>

const StyledBurgerMenuButton = styled(BurgerMenuButton)`
    width: 48px;
    padding: 11px 0px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    background: none;
    border-radius: 50%;
    transform: scale(1.0);

    transition: background .25s;
    transition: scale .5s;
    
    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export default StyledBurgerMenuButton;