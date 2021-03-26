import React from 'react';

const NoResultsRenderer: React.FunctionComponent = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ margin: '16px 0px' }} lang="ja" title="ショボーン">
                (´・ω・`)
            </div>
            <p style={{ padding: '0px 40vw' }}>
                No results available. Please try clearing your filters or uploading a CSV with content.
            </p>
        </div>
    );
};

export default NoResultsRenderer;
