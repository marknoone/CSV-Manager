import React from 'react';
import styled from 'styled-components';
import ToolbarButton from './toolbar_button';
import { DropdownMenu } from '../../../dropdown-menu';

const DropdownToolbarButtonContainer = styled.div`
    width: 100%;
    position: relative;
`;

type DropdownToolbarButtonProps = {
    options: string[];
    activeOption: string;
    onChange: (option: string) => void; 
}
const DropdownToolbarButton: React.FunctionComponent<DropdownToolbarButtonProps> = ({ options, activeOption, onChange }) => {
    const menuEntries = options.reduce((accum, option) => ({
        ...accum,
        [option]: () => onChange(option)
    }), {});

    return <DropdownToolbarButtonContainer>
            <DropdownMenu menuEntries={menuEntries}>
                <ToolbarButton label={activeOption} />
        </DropdownMenu>    
    </DropdownToolbarButtonContainer>
};

export default DropdownToolbarButton;