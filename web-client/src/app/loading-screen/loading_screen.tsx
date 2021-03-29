import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoadingLoader from './loading_loader';
import { getRandomLoadingMessage } from './loading_messages';

const MESSAGE_SWAP_TIME_SECS = 4;

const LoadingScreenContainer = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 50vh 20vw;
`;

const LoadingText = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
`;

const LoadingSubtext = styled(LoadingText)`
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
`;

const LoadingScreen: React.FunctionComponent = () => {
    const [message, setMessage] = useState<string>(getRandomLoadingMessage());

    useEffect(() => {
        const messageInterval = setInterval(() => setMessage(getRandomLoadingMessage), MESSAGE_SWAP_TIME_SECS * 1000);
        return () => clearInterval(messageInterval);
    });

    return (
        <LoadingScreenContainer>
            <LoadingLoader />
            <LoadingText data-testid="loading-title">Loading CSV Application</LoadingText>
            <LoadingSubtext>{message}</LoadingSubtext>
        </LoadingScreenContainer>
    );
};

export default LoadingScreen;
