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

const FilterRenderer: React.FunctionComponent = (p: any) => (
    <FilterContainer>
        <FilterInput type="text" value={p.value} placeholder="Filter" onChange={(e) => p.onChange(e.target.value)} />
    </FilterContainer>
);

FilterRenderer.displayName = 'FilterRenderer';

export default FilterRenderer;
