import React from 'react';
import styled from 'styled-components';
import { CSVMetaData } from '../../store/meta';

const FileSummaryContainer = styled.li``;

const FileSummary: React.FunctionComponent<CSVMetaData> = ({ id, title, lastModified, fileSizeBytes }: CSVMetaData) => (
    <FileSummaryContainer>
        {id}
        {title}
        {lastModified}
        {fileSizeBytes}
    </FileSummaryContainer>
);

export default FileSummary;
