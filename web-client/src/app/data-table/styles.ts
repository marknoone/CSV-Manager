import React from 'react';
import styled from 'styled-components';

export const FilterContainer = styled.div`
    height: inherit;
    align-items: center;
`;

export const FilterInput = styled.input`
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    padding: 4px;
    font-size: 14px;
    height: 32px;
    font-size: 14px;
`;

export const StyledDataGridHOF = (rdg: React.FunctionComponent): React.FunctionComponent => styled(rdg)`
    background-color: #fff;
    height: calc(100vh - 64px);
    border: none;
    overflow-y: auto;
    overflow-x: hidden;
`;
