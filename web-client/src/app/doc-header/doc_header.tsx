import React from 'react';
import AppIcon from './csv.png';
import { Selectors } from '../../store/csv';
import { Actions as ModalActions } from '../../store/modals';
import { Modals } from '../../modals/modal_map';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutWrapper, AppIconContainer, HeaderButtonList, HeaderContainer, FileDownloadButton } from './styles';
import { useHistory } from 'react-router-dom';

type HeaderButtons = {
    [menuTitle: string]: () => void;
};

const DocumentHeader: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const documentName = useSelector(Selectors.getCurrentName);
    const headerButtons: HeaderButtons = {
        Open: () => history.push('/'),
        Upload: () => dispatch(ModalActions.showModal(Modals.ImportPanel, {})),
    };

    return (
        <LayoutWrapper>
            <AppIconContainer data-testid="app-icon" onClick={() => history.push('/')}>
                <img src={AppIcon} />
            </AppIconContainer>
            <HeaderContainer>
                <p data-testid="document-name">{documentName}</p>
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
        </LayoutWrapper>
    );
};

export default DocumentHeader;
