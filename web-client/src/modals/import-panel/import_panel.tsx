import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Actions as CSVActions, Selectors as CSVSelectors } from '../../store/csv';
import FileDropzone from './file_dropzone';
import UploadProgress from './upload_progress';
import Modal from '../modal';

const MAX_FILE_SIZE = 52428800; // 50MB in bytes
const ACCEPTED_MIME_TYPE = ['text/csv'];

const ImportPanel: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const uploadingFile = useSelector(CSVSelectors.getUploadFile);
    const loadingProgress = useSelector(CSVSelectors.getUploadFileLoadProgress);

    const onDropAccepted = useCallback((acceptedFiles) => dispatch(CSVActions.uploadCSVFile(acceptedFiles[0])), []);
    const onDropReject = useCallback((acceptedFiles) => {
        console.log('ERROR');
        console.log(acceptedFiles);
    }, []);

    const getContent = (): React.ReactNode => {
        if (uploadingFile !== null && loadingProgress >= 1.0)
            return (
                <FileDropzone
                    primaryText="Upload Complete."
                    subText="Uploading another?"
                    maxFileSize={MAX_FILE_SIZE}
                    acceptedMIMEs={ACCEPTED_MIME_TYPE}
                    onDropAccepted={onDropAccepted}
                    onDropRejected={onDropReject}
                />
            );
        else if (uploadingFile !== null) return <UploadProgress />;
        return (
            <FileDropzone
                maxFileSize={MAX_FILE_SIZE}
                acceptedMIMEs={ACCEPTED_MIME_TYPE}
                onDropAccepted={onDropAccepted}
                onDropRejected={onDropReject}
            />
        );
    };

    return <Modal title="Import CSV File"> {getContent()} </Modal>;
};

export default ImportPanel;
