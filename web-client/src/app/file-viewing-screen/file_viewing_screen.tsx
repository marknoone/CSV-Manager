import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Selectors } from '../../store/meta';
import FileSummary from './file_summary';

const ScreenTitle = styled.p``;

const HintText = styled.p``;

const FileViewingContainer = styled.div``;

const FileList = styled.ul``;

const ImportButton = styled.button``;

const FileViewingScreen: React.FunctionComponent = () => {
    const metaDataList = useSelector(Selectors.getCSVMetaData);

    return (
        <>
            <FileViewingContainer>
                <ScreenTitle>CSV Manager v1.0</ScreenTitle>
                <HintText>Open File:</HintText>
                <FileList>
                    {metaDataList.map((metaData) => (
                        <FileSummary key={metaData.id} {...metaData} />
                    ))}
                </FileList>
                <ImportButton>
                    <span>
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                    Import CSV File
                </ImportButton>
            </FileViewingContainer>
        </>
    );
};

export default FileViewingScreen;
