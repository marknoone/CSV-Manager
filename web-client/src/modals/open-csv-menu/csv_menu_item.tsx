import React from 'react';
import styled from 'styled-components';
import { CSVMetaData } from '../../store/meta';

const CSVListElement = styled.li`
    position: relative;
    height: 48px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    &:hover {
        background: #efefef;
    }
`;

const CSVListItemWrapper = styled.span`
    line-height: 48px;
    font-family: 'Open Sans', sans-serif;
    color: #343434;
`;

const CSVListIDWrapper = styled(CSVListItemWrapper)`
    padding: 2px 16px;
`;

const CSVListTitleWrapper = styled(CSVListItemWrapper)`
    padding-left: 16px;
`;

const CSVListCreatedAtWrapper = styled(CSVListItemWrapper)`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 14px;
    font-weight: 500;
    color: #ddd;
`;

const CSVListFileSizeWrapper = styled(CSVListItemWrapper)`
    position: absolute;
    right: 150px;
    top: 0;
    font-size: 14px;
    font-weight: 500;
`;

const formatBytes = (bytes: number, decimals?: number) => {
    if(bytes == 0) return '0 Bytes';
    var k = 1024,
        dm = decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
 }

const CSVListItem: React.FunctionComponent<CSVMetaData> = (metaData) => {
    const formattedDate = new Date(metaData.lastModified * 1000); 
    const formattedFileSize = formatBytes(metaData.fileSizeBytes)

    return <CSVListElement>
        <CSVListIDWrapper>{ metaData.id }.</CSVListIDWrapper>
        <CSVListTitleWrapper>{ metaData.title }</CSVListTitleWrapper>
        <CSVListFileSizeWrapper>{ formattedFileSize }</CSVListFileSizeWrapper>
        <CSVListCreatedAtWrapper>{ formattedDate.toLocaleString() }</CSVListCreatedAtWrapper>
    </CSVListElement>;
};

export default CSVListItem;