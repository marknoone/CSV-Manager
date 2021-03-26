import React, { useState } from 'react';
import { DropdownMenu } from '../dropdown-menu';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    LayoutWrapper,
    DropdownMenuLayoutWrapper,
    DocumentNameLayoutWrapper,
    DocumentNameInput,
    DocumentNameSaveButton,
    DocumentName,
    BurgerMenuButtonContainer,
} from './styles';

const DocumentHeader: React.FunctionComponent = () => {
    const [documentName, setDocumentName] = useState<string>('Untitled Document');
    const [isNameBeingEdited, setIsNameBeingEdited] = useState<boolean>(false);
    const burgerMenuEntries = {
        Open: () => console.log('Open Button'),
        Import: () => console.log('Import Button'),
        Export: () => console.log('Export Button'),
    };

    return (
        <LayoutWrapper>
            <DropdownMenuLayoutWrapper>
                <DropdownMenu menuEntries={burgerMenuEntries}>
                    <BurgerMenuButtonContainer>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </BurgerMenuButtonContainer>
                </DropdownMenu>
            </DropdownMenuLayoutWrapper>

            <DocumentNameLayoutWrapper>
                {isNameBeingEdited ? (
                    <>
                        <DocumentNameInput
                            type="text"
                            value={documentName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setDocumentName(e.target.value);
                            }}
                        />
                        <DocumentNameSaveButton
                            onClick={() => {
                                setIsNameBeingEdited(false);
                            }}
                        >
                            Save
                        </DocumentNameSaveButton>
                    </>
                ) : (
                    <DocumentName
                        onClick={() => {
                            setIsNameBeingEdited(true);
                        }}
                    >
                        {documentName}
                    </DocumentName>
                )}
            </DocumentNameLayoutWrapper>
        </LayoutWrapper>
    );
};

export default DocumentHeader;
