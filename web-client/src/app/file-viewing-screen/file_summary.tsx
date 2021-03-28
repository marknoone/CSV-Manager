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

const FileSizeWrapper = styled(FileSummaryElementWrapper)`
    position: absolute;
    right: 150px;
    top: 0;
    font-size: 14px;
    font-weight: 500;
`;

const formatBytes = (bytes: number, decimals?: number) => {
    if (bytes == 0) return '0 Bytes';
    const k = 1024,
        dm = decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const FileSummary: React.FunctionComponent<CSVMetaData> = ({ id, title, lastModified, fileSizeBytes }: CSVMetaData) => {
    const history = useHistory();
    const formattedDate = new Date(lastModified * 1000);
    const formattedFileSize = formatBytes(fileSizeBytes);

    return (
        <FileSummaryElement onClick={() => history.push('/' + id)}>
            <FileIDWrapper>{id}</FileIDWrapper>
            <FileTitleWrapper>{title}</FileTitleWrapper>
            <FileSizeWrapper>{formattedFileSize}</FileSizeWrapper>
            <FileCreatedAtWrapper>{formattedDate.toLocaleString()}</FileCreatedAtWrapper>
        </FileSummaryElement>
    );
};

export default FileSummary;
