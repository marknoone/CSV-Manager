import React from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';
import { DragNDropContainer, DragNDropElement, MessageHighlight, MessageSubText, ManualUploadButton } from './styles';

type FileDropZoneProps = {
    primaryText?: string;
    subText?: string;
    maxFileSize?: number;
    acceptedMIMEs?: string[];
    onDropAccepted: (files: File[]) => void;
    onDropRejected: (files: FileRejection[]) => void;
};

const FileDropzone: React.FunctionComponent<FileDropZoneProps> = (props: FileDropZoneProps) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        multiple: false,
        maxSize: props.maxFileSize,
        accept: props.acceptedMIMEs,
        onDropAccepted: props.onDropAccepted,
        onDropRejected: props.onDropRejected,
    });

    return (
        <>
            <input {...getInputProps()} />
            <DragNDropContainer {...getRootProps()}>
                <DragNDropElement style={{ border: isDragActive ? '2px dashed #4d90fe' : '2px dashed #ddd' }}>
                    <MessageHighlight style={{ color: isDragActive ? '#4d90fe' : '#aaa' }}>
                        {props.primaryText ? props.primaryText : 'Drag a file here'}
                    </MessageHighlight>
                    <MessageSubText>{props.subText ? props.subText : 'Or, if you prefer...'}</MessageSubText>
                    <ManualUploadButton>Select a file from your device.</ManualUploadButton>
                </DragNDropElement>
            </DragNDropContainer>
        </>
    );
};

export default FileDropzone;
