import React, { useEffect, useRef, useState } from 'react';
import { DropdownChildWrapper, DropdownMenuContainer, DropdownMenuElement } from './styles';

interface DropdownMenuProps {
    children?: React.ReactNode;
    menuEntries: {
        [entry: string]: () => void;
    };
}

const DropdownMenu: React.FunctionComponent<DropdownMenuProps> = ({ menuEntries, children }: DropdownMenuProps) => {
    const menuContainerRef = useRef<HTMLDivElement>(null);
    const [isMenuShowing, setIsMenuShowing] = useState<boolean>(false);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (menuContainerRef.current && !menuContainerRef.current.contains(event.target)) {
                setIsMenuShowing(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuContainerRef]);

    return (
        <div style={{ display: 'inline-block', width: '100%' }} ref={menuContainerRef}>
            <DropdownChildWrapper
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.preventDefault();
                    setIsMenuShowing(!isMenuShowing);
                }}
            >
                {children}
            </DropdownChildWrapper>
            {isMenuShowing ? (
                <DropdownMenuContainer>
                    {Object.keys(menuEntries).map((entryName: string) => {
                        const entryCallback = menuEntries[entryName];
                        return (
                            <DropdownMenuElement
                                key={entryName}
                                onClick={() => {
                                    entryCallback();
                                    setIsMenuShowing(false);
                                }}
                            >
                                {entryName}
                            </DropdownMenuElement>
                        );
                    })}
                </DropdownMenuContainer>
            ) : null}
        </div>
    );
};

export default DropdownMenu;
