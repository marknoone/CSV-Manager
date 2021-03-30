import { Actions } from './';
import { channel } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { Actions as MetaActions } from '../meta';
import { Actions as ModalActions } from '../modals';
import { Modals } from '../../modals/modal_map';

export const fileUploadChannel = channel();

export type ProgressObj = { loaded: number; total: number };

export enum FileUploadChannelType {
    PROGRESS_UPDATE = 1,
    UPLOAD_COMPLETE,
    UPLOAD_ERROR,
}

export type FileUploadChannelAction = {
    type: FileUploadChannelType;
    payload: {
        error?: string;
        progress?: ProgressObj;
    };
};

export function* watchUploadFileChannel(action: FileUploadChannelAction) {
    switch (action.type) {
        case FileUploadChannelType.PROGRESS_UPDATE:
            if (action.payload.progress) {
                const progressAmount = action.payload.progress.loaded / action.payload.progress.total;
                yield put(Actions.setUploadProgress(progressAmount));
            }
            break;
        case FileUploadChannelType.UPLOAD_COMPLETE:
            yield put(MetaActions.getCSVMetaData());
            break;
        case FileUploadChannelType.UPLOAD_ERROR:
            if (action.payload.error)
                yield put(
                    ModalActions.showModal(Modals.AlertPanel, {
                        message: action.payload.error,
                    }),
                );
            break;
        default:
    }
}
