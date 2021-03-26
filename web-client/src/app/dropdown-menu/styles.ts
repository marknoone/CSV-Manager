import styled from 'styled-components';

export const DropdownChildWrapper = styled.div`
    display: inline-block;
    width: 100%;
`;

export const DropdownMenuContainer = styled.ul`
    position: absolute;
    border-radius: 6px;
    background: white;
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #343434;
    z-index; 128;
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.25);
    user-select: none;
    z-index: 128;
    text-align: left;
`;

export const DropdownMenuElement = styled.li`
    padding: 12px 24px;
    cursor: pointer;
    background: none;
    transform: scale(1);

    &:hover {
        background: #efefef;
    }
    &:active {
        transform: scale(0.95);
    }
`;
