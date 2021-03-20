import { AlertPanel } from './alert-panel';
import { ConfirmationPanel } from './confirmation-panel';
import { OpenCSVMenu } from './open-csv-menu';

type ModalMap = {
    [key:number] : (props: any) => JSX.Element; 
}

export enum Modals {
    AlertPanel = 1,
    ConfirmationPanel,
    OpenCSVMenu
}

export const MODAL_MAP: ModalMap = {
    [Modals.AlertPanel] :  (props: any) => <AlertPanel {...props} />, 
    [Modals.ConfirmationPanel] : (props: any) => <ConfirmationPanel {...props} /> , 
    [Modals.OpenCSVMenu] :  (props: any) => <OpenCSVMenu {...props} /> , 
}