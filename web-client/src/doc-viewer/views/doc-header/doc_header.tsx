import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownMenu } from '../../../dropdown-menu';
import BurgerMenuButton from './burger_menu_button';

const LayoutWrapper = styled.div`
    width: 100%;
    height: 64px;
    background: #f8f8f8;
    border-bottom: 1px solid #ddd;
    padding: 8px 16px;
    position: relative;
`;

const DropdownMenuLayoutWrapper = styled.div`
    width: 48px;
    text-align: center;
    display: inline-block;
`;

const DocumentNameLayoutWrapper = styled.div`
    display: inline-block;
    margin-left: 12px;
`;

const DocumentName = styled.p`
    display: inline-block;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    user-select: none;
    cursor: pointer;
`;

const DocumentNameInput = styled.input`
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
    border-radius: 6px;
    border: 1px solid #dedede;
    padding: 4px 12px;
    height: 100%;
    outline: 0;
`;

const DocumentNameSaveButton = styled.button`
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    border: none;
    margin-left: 16px;

    transform: scale(1.0);
    transition: scale .5s;

    &:active {
        transform: scale(.95);
    }

    background-color: #00a8ff; 
    font-family: 'Open Sans', sans-serif;
`;


const DocumentHeader : React.FunctionComponent = () => {
    const [documentName, setDocumentName] = useState<string>("Untitled Document");
    const [isNameBeingEdited, setIsNameBeingEdited] = useState<boolean>(false);
    const burgerMenuEntries = {
        "Open": () => console.log("Open Button"),
        "Import": () => console.log("Import Button"),
        "Export": () => console.log("Export Button"),
    }

    return <LayoutWrapper>
        <DropdownMenuLayoutWrapper>
            <DropdownMenu menuEntries={burgerMenuEntries}>
                <BurgerMenuButton />
            </DropdownMenu>
        </DropdownMenuLayoutWrapper>
        
        <DocumentNameLayoutWrapper>
            {
                isNameBeingEdited? (<>
                    <DocumentNameInput type="text" value={documentName} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                            setDocumentName(e.target.value);
                        }}/>
                    <DocumentNameSaveButton onClick={() => {
                        setIsNameBeingEdited(false);
                    }}>Save</DocumentNameSaveButton>
                </> ) : <DocumentName onClick={() => { 
                    setIsNameBeingEdited(true) 
                }}>{ documentName }</DocumentName>
            }
        </DocumentNameLayoutWrapper>
    </LayoutWrapper>;
}

export default DocumentHeader;