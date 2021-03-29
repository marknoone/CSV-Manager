import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { DragNDropElement, MessageHighlight } from './styles';

const UploadProgress: React.FunctionComponent = () => {
    return (
        <DragNDropElement>
            <MessageHighlight style={{ color: '#aaa' }}> Uploading... </MessageHighlight>
            <ClipLoader color={'#666'} loading={true} size={32} />
        </DragNDropElement>
    );
};

export default UploadProgress;
