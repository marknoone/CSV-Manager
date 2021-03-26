import styled from 'styled-components';

export const LayoutWrapper = styled.div`
    width: 100%;
    height: 64px;
    background: #f8f8f8;
    border-bottom: 1px solid #ddd;
    padding: 8px 16px;
    position: relative;
`;

export const DropdownMenuLayoutWrapper = styled.div`
    width: 48px;
    text-align: center;
    display: inline-block;
`;

export const DocumentNameLayoutWrapper = styled.div`
    display: inline-block;
    margin-left: 12px;
`;

export const DocumentName = styled.p`
    display: inline-block;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    user-select: none;
    cursor: pointer;
`;

export const DocumentNameInput = styled.input`
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    border-radius: 6px;
    border: 1px solid #dedede;
    padding: 4px 12px;
    height: 100%;
    outline: 0;
`;

export const DocumentNameSaveButton = styled.button`
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    border: none;
    margin-left: 16px;

    transform: scale(1);
    transition: scale 0.5s;

    &:active {
        transform: scale(0.95);
    }

    background-color: #00a8ff;
    font-family: 'Open Sans', sans-serif;
`;

export const BurgerMenuButtonContainer = styled.div`
    width: 48px;
    padding: 11px 0px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    background: none;
    border-radius: 50%;
    transform: scale(1);

    transition: background 0.25s;
    transition: scale 0.5s;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    &:active {
        transform: scale(0.9);
    }
`;
