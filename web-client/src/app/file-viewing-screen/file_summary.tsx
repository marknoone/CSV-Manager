import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { CSVMetaData } from '../../store/meta';

const FileSummaryElement = styled.li`
    position: relative;
    height: 48px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    &:hover {
        background: #efefef;
    }
`;

const FileSummaryElementWrapper = styled.span`
    line-height: 48px;
    font-family: 'Open Sans', sans-serif;
    color: #343434;
`;

const FileIDWrapper = styled(FileSummaryElementWrapper)`
    padding: 2px 16px;
`;

const FileTitleWrapper = styled(FileSummaryElementWrapper)`
    padding-left: 16px;
`;

const FileCreatedAtWrapper = styled(FileSummaryElementWrapper)`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 14px;
    font-weight: 500;
    color: #ddd;
`;

const FileSummary: React.FunctionComponent<CSVMetaData> = ({ id, name, lastModified }: CSVMetaData) => {
    const history = useHistory();

    return (
        <FileSummaryElement onClick={() => history.push('/' + id)}>
            <FileIDWrapper>{id}</FileIDWrapper>
            <FileTitleWrapper>{name}</FileTitleWrapper>
            <FileCreatedAtWrapper>{lastModified}</FileCreatedAtWrapper>
        </FileSummaryElement>
    );
};

export default FileSummary;
