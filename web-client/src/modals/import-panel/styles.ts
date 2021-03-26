import styled from 'styled-components';

export const DragNDropContainer = styled.div`
    padding: 16px 24px;
    text-align: left;
    height: 240px;
`;

export const DragNDropElement = styled.div`
    text-align: center;
    height: 100%;
    width: 100%;
    padding: 24px 36px;
`;

const MessageText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #aaa;
`;

export const MessageHighlight = styled(MessageText)`
    font-size: 24px;
    font-weight: 500;
    margin: 24px;
`;

export const MessageSubText = styled(MessageText)`
    margin: 10px;
`;

export const ManualUploadButton = styled.button`
    background-color: #4d90fe;
    border: 1px solid #3079ed;
    user-select: none;
    color: #fff;
    margin: 0;
    transition: all 0.2s;
    min-width: 54px;
    padding: 0px 8px;
    line-height: 27px;

    font-family: 'Open Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;

    backage-image: -webkit-linear-gradient(top, #4d90fe, #4787ed);
    backage-image: -moz-linear-gradient(top, #4d90fe, #4787ed);
    backage-image: -ms-linear-gradient(top, #4d90fe, #4787ed);
    backage-image: -o-linear-gradient(top, #4d90fe, #4787ed);
    backage-image: linear-gradient(top, #4d90fe, #4787ed);
`;
