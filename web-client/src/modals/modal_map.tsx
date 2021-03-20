import { AlertPanel } from './alert-panel';
import { ConfirmationPanel } from './confirmation-panel';
import { OpenCSVMenu } from './open-csv-menu';

type ModalMap = {
    [key:number] : JSX.Element; 
}

export enum Modals {
    AlertPanel = 1,
    ConfirmationPanel,
    OpenCSVMenu
}

export const MODAL_MAP: ModalMap = {
    [Modals.AlertPanel] :  <AlertPanel />, 
    [Modals.ConfirmationPanel] : <ConfirmationPanel /> , 
    [Modals.OpenCSVMenu] : <OpenCSVMenu /> , 
}