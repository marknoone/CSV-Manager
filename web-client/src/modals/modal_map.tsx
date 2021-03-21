import { ConfirmationPanel } from './confirmation-panel';
import { OpenCSVMenu } from './open-csv-menu';

type ModalMap = {
    [key:number] : JSX.Element; 
}

export enum Modals {
    ConfirmationPanel = 1,
    OpenCSVMenu
}

export const MODAL_MAP: ModalMap = {
    [Modals.ConfirmationPanel] : <ConfirmationPanel /> , 
    [Modals.OpenCSVMenu] : <OpenCSVMenu /> , 
}