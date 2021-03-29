import React from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

const LoadingDataContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 64px;

    P {
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        font-weight: 500;
        color: #343434;
    }
`;

const LoadingData: React.FunctionComponent = () => {
    return (
        <LoadingDataContainer>
            <p>Loading Data....</p>
            <ClipLoader color={'#666'} loading={true} size={32} />
        </LoadingDataContainer>
    );
};

export default LoadingData;
