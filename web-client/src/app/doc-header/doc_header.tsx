import React from 'react';
import AppIcon from './csv.png';
import { LayoutWrapper, AppIconContainer, HeaderButtonList, HeaderContainer, ResultCountContainer } from './styles';
import { Selectors } from '../../store/csv';
import { useSelector } from 'react-redux';

type HeaderButtons = {
    [menuTitle: string]: () => void;
};

const DocumentHeader: React.FunctionComponent = () => {
    const documentName = useSelector(Selectors.getCurrentName);
    const resultCount = useSelector(Selectors.getCurrentDataRowCount);
    const headerButtons: HeaderButtons = {
        Open: () => console.log('Open Button'),
        Import: () => console.log('Import Button'),
        Export: () => console.log('Export Button'),
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
                </HeaderButtonList>
            </HeaderContainer>
            <ResultCountContainer>
                <p>{resultCount} Resulting Rows</p>
            </ResultCountContainer>
        </LayoutWrapper>
    );
};

export default DocumentHeader;
