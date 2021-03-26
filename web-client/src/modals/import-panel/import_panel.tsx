import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { DragNDropContainer, DragNDropElement, MessageHighlight, MessageSubText, ManualUploadButton } from './styles';
import Modal from '../modal';

const MAX_FILE_SIZE = 52428800; // 50MB in bytes
const ACCEPTED_MIME_TYPE = ['image/*'];

const ImportPanel: React.FunctionComponent = () => {
    const onDropAccepted = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
    }, []);

    const onDropReject = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        multiple: false,
        maxSize: MAX_FILE_SIZE,
        accept: ACCEPTED_MIME_TYPE,
        onDropAccepted: onDropAccepted,
        onDropRejected: onDropReject,
    });

    return (
        <Modal title="Import CSV File">
            <input {...getInputProps()} />
            <DragNDropContainer {...getRootProps()}>
                <DragNDropElement style={{ border: isDragActive ? '2px dashed #4d90fe' : '2px dashed #ddd' }}>
                    <MessageHighlight style={{ color: isDragActive ? '#4d90fe' : '#aaa' }}>
                        Drag a file here
                    </MessageHighlight>
                    <MessageSubText>Or, if you prefer...</MessageSubText>
                    <ManualUploadButton>Select a file from your device.</ManualUploadButton>
                </DragNDropElement>
            </DragNDropContainer>
        </Modal>
    );
};

export default ImportPanel;
