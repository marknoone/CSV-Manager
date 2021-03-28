import styled from 'styled-components';

export const LayoutWrapper = styled.div`
    width: 100%;
    height: 64px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    position: relative;
`;

export const AppIconContainer = styled.div`
    position: absolute;
    display: inline-block;
    height: 100%;
    left: 0;
    top: 0;
    padding: 8px;
    width: 64px;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const HeaderContainer = styled.div`
    position: absolute;
    display: inline-block;
    height: 100%;
    left: 72px;
    top: 0;

    p {
        display: inline-block;
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
        user-select: none;
        margin: 0;
        margin-top: 8px;
        margin-left: 8px;
    }
`;

export const HeaderButtonList = styled.ul`
    list-type: none;
    text-decoration: none;
    margin: 0;
    padding: 0;

    li {
        display: inline-block;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        font-weight: 500;
        padding: 4px 8px;
        cursor: pointer;
        border-radius: 2px;

        &:hover {
            background: #ddd;
        }
    }
`;

export const ResultCountContainer = styled.div`
    position: absolute;
    height: 100%;
    right: 32px;
    top: 0;

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 64px;
        color: #212529;
    }
`;

export const FileDownloadButton = styled.a`
    user-select: none;
    color: #212529;

    &:hover {
        text-decoration: none;
        color: #212529;
    }
`;
