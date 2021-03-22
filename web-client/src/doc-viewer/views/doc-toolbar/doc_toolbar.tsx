import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownMenu from './dropdown_menu';
import ResultText from './result_text';

const DocumentToolbarWrapper = styled.div`
    height: 32px;
    width: 100%;
    background-color: #F8F8F8;
    border-bottom: 1px solid #ddd;
    position: relative;
    z-index: 10;
`;

const QueryTypeLayoutWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 128px;
    height: 100%;
    border-right: 1px solid #ddd;
    z-index: 10;
`;

const ColumnSelectionLayoutWrapper = styled.div`
    position: absolute;
    left: 128px;
    top: 0;
    display: inline-block;
    width: 128px;
    height: 100%;
    border-right: 1px solid #ddd;
`;

const ResultTextWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 32px;
    line-height: 28px;
    margin-right: 16px;
`;

const FilterInputWrapper = styled.div`
    position: absolute;
    left: 256px;
    right: 128px;
    top: 0;
    height: 32px;
    line-height: 28px;
    margin-right: 16px;
`; 

const FilterInput = styled.input`
    border: none;
    background: none;
    outline: 0;
    font-size: 14px;
    color: #999;
    padding-left: 16px;
    height: 100%;
    width: 50vw;
`;

const FilterButton = styled.button`
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    position: absolute;
    right: 4px;
    top: 4px;
    width: 96px;
    color: white;
    height: 24px;
    border-radius: 4px;
    background-color: #00a8ff;
    border: none;
    cursor: pointer;

    transform: scale(1.0);
    transition: scale .25s;

    &:active {
        transform: scale(0.9);
    }
`;

const dataHeaders: string[] = ["Header 1", "Header 2"];
const queryTypes: string[] = ["Regex"];

const DocumentToolbar : React.FunctionComponent = () => {
    const [regexFilterValue, setRegexFilterValue] = useState<string>("");
    const [selectedColumn, setSelectedColumn] = useState<string>(dataHeaders[0]);
    const [queryType, setQueryType] = useState<string>(queryTypes[0]);

    return <DocumentToolbarWrapper>
        <QueryTypeLayoutWrapper>
            <DropdownMenu activeOption={queryType} options={queryTypes} onChange={(option: string) => setQueryType(option)}/>
        </QueryTypeLayoutWrapper>
        <ColumnSelectionLayoutWrapper>
            <DropdownMenu activeOption={selectedColumn} options={dataHeaders} onChange={(option: string) => setSelectedColumn(option)}/>
        </ColumnSelectionLayoutWrapper>
        <FilterInputWrapper>
            <FilterInput type="text" placeholder="Enter REGEX filter text here..." value={regexFilterValue}
                onChange={  (e: React.ChangeEvent<HTMLInputElement>) => setRegexFilterValue(e.target.value)}/>
            <FilterButton> Filter </FilterButton>
        </FilterInputWrapper>
        <ResultTextWrapper><ResultText results={345}/></ResultTextWrapper>
    </DocumentToolbarWrapper>;
}

export default DocumentToolbar;