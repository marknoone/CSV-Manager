import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { convertCompilerOptionsFromJson } from 'typescript';

interface DropdownMenuProps {
    menuEntries: {
        [entry: string]: () => void
    }
}

const DropdownChildWrapper = styled.div`
    display: inline-block;
`;

const DropdownMenuContainer = styled.ul`
    position: absolute;
    border-radius: 6px;
    background: white;
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #343434;
    z-index; 128;
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.25);
    user-select: none;
    z-index: 128;
`

const DropdownMenuElement = styled.li`
    padding: 12px 24px;
    cursor: pointer;
    background: none;
    transform: scale(1.0);

    &:hover { background: #efefef; }
    &:active { transform: scale(0.95); }

`;

const DropdownMenu: React.FunctionComponent<DropdownMenuProps> = ({ menuEntries, children }) => {
    const menuContainerRef = useRef<HTMLDivElement>(null);
    const [isMenuShowing, setIsMenuShowing] = useState<boolean>(false);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (menuContainerRef.current && !menuContainerRef.current.contains(event.target)) {
                setIsMenuShowing(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuContainerRef]);
      

    return <div style={{display: 'inline-block'}} ref={menuContainerRef}>
        <DropdownChildWrapper onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            setIsMenuShowing(!isMenuShowing);
        }}>
            { children }
        </DropdownChildWrapper>
        {
            isMenuShowing ? <DropdownMenuContainer>
            {
                Object.keys(menuEntries).map((entryName:string) => {
                    const entryCallback = menuEntries[entryName];
                    return <DropdownMenuElement key={entryName} onClick={() => {
                        entryCallback();
                        setIsMenuShowing(false);
                    }}>
                        {entryName}
                    </DropdownMenuElement>;
                })
            }
            </DropdownMenuContainer> : null
        }
    </div>
    
    
}

export default DropdownMenu;