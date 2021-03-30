import { AlertPanel } from './alert-panel';
import { ImportPanel } from './import-panel';

type ModalMap = {
    [key: number]: JSX.Element;
};

export enum Modals {
    AlertPanel = 1,
    ImportPanel,
}

export const MODAL_MAP: ModalMap = {
    [Modals.AlertPanel]: <AlertPanel />,
    [Modals.ImportPanel]: <ImportPanel />,
};
