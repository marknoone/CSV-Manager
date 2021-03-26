import React from 'react';
import AppIcon from './csv.png';
import { Selectors } from '../../store/csv';
import { Actions as ModalActions } from '../../store/modals';
import { Modals } from '../../modals/modal_map';
import { useDispatch, useSelector } from 'react-redux';
import {
    LayoutWrapper,
    AppIconContainer,
    HeaderButtonList,
    HeaderContainer,
    ResultCountContainer,
    FileDownloadButton,
} from './styles';

type HeaderButtons = {
    [menuTitle: string]: () => void;
};

const DocumentHeader: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const documentName = useSelector(Selectors.getCurrentName);
    const resultCount = useSelector(Selectors.getFilteredData).length;
    const headerButtons: HeaderButtons = {
        Open: () => dispatch(ModalActions.showModal(Modals.OpenCSVMenu, {})),
        Upload: () => dispatch(ModalActions.showModal(Modals.ImportPanel, {})),
    };

    return (
        <LayoutWrapper>
            <AppIconContainer>
                <img src={AppIcon} />
            </AppIconContainer>
            <HeaderContainer>
                <p>{documentName}</p>
                <HeaderButtonList>
                    {Object.entries(headerButtons).map(([buttonName, buttonCallback]) => {
                        return (
                            <li key={buttonName} onClick={buttonCallback}>
                                {buttonName}
                            </li>
                        );
                    })}
                    <li>
                        <FileDownloadButton
                            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                            title="Download CSV File"
                            target="_blank"
                            rel="noreferrer"
                            download
                        >
                            Download
                        </FileDownloadButton>
                    </li>
                </HeaderButtonList>
            </HeaderContainer>
            <ResultCountContainer>
                <p>{resultCount} Resulting Rows</p>
            </ResultCountContainer>
        </LayoutWrapper>
    );
};

export default DocumentHeader;
