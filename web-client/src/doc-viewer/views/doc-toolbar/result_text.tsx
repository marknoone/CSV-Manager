import React from 'react';
import styled from 'styled-components';

type ResultTextProps = {
    results: number;
    className?: string;
}

const ResultText: React.FunctionComponent<ResultTextProps> = ({ className, results }) => 
    <p className={className}>{results} Rows Found</p>

const StyledResultText = styled(ResultText)`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #999;
    border-left: 1px solid #ddd;
    padding-left: 16px;
    height: 100%;
    user-select: none;
`;

export default StyledResultText;