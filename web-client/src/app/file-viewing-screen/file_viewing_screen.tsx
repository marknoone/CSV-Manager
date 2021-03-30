import React from 'react';
import styled from 'styled-components';
import { Actions as ModalActions } from '../../store/modals';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { Selectors } from '../../store/meta';
import FileSummary from './file_summary';
import { Modals } from '../../modals/modal_map';

const ScreenTitle = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #343434;
    margin-top: 5vh;
`;

const HintText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #343434;
`;

const FileViewingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0px 5vw;
`;

const FileList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    width: 100%;
    height: 85%;
    overflow-y: auto;
`;

const ImportFileRow = styled.li`
    position: relative;
    height: 48px;
    cursor: pointer;

    &:hover {
        background: #efefef;
    }
`;
const ImportFileName = styled.p`
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #343434;
    font-weight: 500;
    line-height: 48px;
    user-select: none;
`;

const ImportFileIcon = styled.span`
    padding: 2px 14px;
    line-height: 48px;
    color: #343434;
    margin-right: 18px;
`;

const FileViewingScreen: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const metaDataList = useSelector(Selectors.getCSVMetaData);

    return (
        <>
            <FileViewingContainer>
                <ScreenTitle>CSV Manager v0.1</ScreenTitle>
                <HintText>Open File:</HintText>
                <FileList>
                    {metaDataList.map((metaData) => (
                        <FileSummary key={metaData.id} {...metaData} />
                    ))}
                    <ImportFileRow
                        data-testid="import-file-row"
                        onClick={() => dispatch(ModalActions.showModal(Modals.ImportPanel, {}))}
                    >
                        <ImportFileName>
                            <ImportFileIcon>
                                <FontAwesomeIcon icon={faPlus} />
                            </ImportFileIcon>
                            Import CSV File
                        </ImportFileName>
                    </ImportFileRow>
                </FileList>
            </FileViewingContainer>
        </>
    );
};

export default FileViewingScreen;
