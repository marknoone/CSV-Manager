import { ConfirmationPanel } from './confirmation-panel';
import { ImportPanel } from './import-panel';

type ModalMap = {
    [key: number]: JSX.Element;
};

export enum Modals {
    ConfirmationPanel = 1,
    OpenCSVMenu,
    ImportPanel,
}

export const MODAL_MAP: ModalMap = {
    [Modals.ConfirmationPanel]: <ConfirmationPanel />,
    [Modals.ImportPanel]: <ImportPanel />,
};
