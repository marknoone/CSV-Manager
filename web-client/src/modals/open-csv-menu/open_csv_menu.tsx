import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from '../modal';
import { Selectors } from '../../store/meta';
import CSVListItem from './csv_menu_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Actions } from '../../store/modals';
import { Modals } from '../modal_map';

const CSVMenuContainer = styled.div`
    padding: 0px 24px;
    text-align: left;
`;

const CSVList = styled.ul`
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    padding-bottom: 64px;
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
    padding-left: 20px;
    line-height: 48px;
    user-select: none;
`;

const ImportFileIcon = styled.span`
    padding: 2px 14px;
    line-height: 48px;
    color: #343434;
`;

const OpenCSVPanel: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const csvMetaData = useSelector(Selectors.getCSVMetaData);

    return (
        <Modal title={'Open CSV File'}>
            <CSVMenuContainer>
                <CSVList>
                    {csvMetaData.map((metaData) => (
                        <CSVListItem key={metaData.id} {...metaData} />
                    ))}
                    <ImportFileRow onClick={() => dispatch(Actions.showModal(Modals.ImportPanel, {}))}>
                        <ImportFileIcon>
                            <FontAwesomeIcon icon={faPlus} />
                        </ImportFileIcon>
                        <ImportFileName> Import CSV File.</ImportFileName>
                    </ImportFileRow>
                </CSVList>
            </CSVMenuContainer>
        </Modal>
    );
};

export default OpenCSVPanel;
