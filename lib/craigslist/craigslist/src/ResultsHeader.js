import React from 'react';
import Breadcrumbs from './Breadcrumbs';

function ResultsHeader(props) {
    return (
        <div>
            <div className="breadcrumbs">
                <Breadcrumbs />
            </div>
            <h2 className = "couch">Couch</h2>
        </div>
    );
}

export default ResultsHeader;