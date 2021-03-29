import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Actions as CSVActions, Selectors as CSVSelectors } from '../../store/csv';

const FooterbarContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 48px;
    background: #f8f8f8;
    border-top: 1px solid #ddd;
    box-shadow: 0px -1px 8px 2px rgba(0, 0, 0, 0.25);
`;

const ResultsText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #343434;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 42px;
`;

const FilterLabelText = styled(ResultsText)`
    position: absolute;
    top: 0;
    bottom: 0;
    padding-right: 100px;
    font-size: 14px;
    text-align: right;
`;

const FilterToggleContainer = styled.div`
    position: absolute;
    width: 48px;
    height: 24px;
    border-radius: 12px;
    cursor: pointer;
    right: 32px;
    bottom: 12px;
`;

const FilterKnob = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.25);
`;

export const FooterBar: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const isFilterRowVisibile = useSelector(CSVSelectors.isFilterRowVisibile);
    const resultingRows = useSelector(CSVSelectors.getFilteredData).length;
    const toggleFilter = () => dispatch(CSVActions.setIsFilterRowVisibile(!isFilterRowVisibile));

    return (
        <FooterbarContainer>
            <ResultsText>{resultingRows} Rows Found.</ResultsText>
            <FilterLabelText>Filter Toggle:</FilterLabelText>
            <FilterToggleContainer
                onClick={toggleFilter}
                style={{
                    backgroundColor: isFilterRowVisibile ? '#1dd1a1' : '#ee5253',
                }}
            >
                <FilterKnob style={{ float: isFilterRowVisibile ? 'left' : 'right' }} />
            </FilterToggleContainer>
        </FooterbarContainer>
    );
};

export default FooterBar;
