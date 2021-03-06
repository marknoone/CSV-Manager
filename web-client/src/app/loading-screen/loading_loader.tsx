import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    width: 142px;
    height: 40px;
    margin: -20px 0 0 -71px;
    background: white;
    filter: contrast(20);

    .dot {
        position: absolute;
        width: 16px;
        height: 16px;
        top: 12px;
        left: 15px;
        filter: blur(4px);
        background: #000;
        border-radius: 50%;
        transform: translateX(0);
        animation: dot 2.8s infinite;
    }

    .dots {
        transform: translateX(0);
        margin-top: 12px;
        margin-left: 31px;
        animation: dots 2.8s infinite;
        span {
            display: block;
            float: left;
            width: 16px;
            height: 16px;
            margin-left: 16px;
            filter: blur(4px);
            background: #000;
            border-radius: 50%;
        }
    }

    @keyframes dot {
        50% {
            transform: translateX(96px);
        }
    }

    @keyframes dots {
        50% {
            transform: translateX(-31px);
        }
    }
`;

const LoadingLoader: React.FunctionComponent = () => (
    <LoadingContainer data-testid="loading-icon">
        <span className="dot"></span>
        <div className="dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </LoadingContainer>
);

export default LoadingLoader;
