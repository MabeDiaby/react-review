import React from 'react';
import ResultsList from './ResultsList';
import ResultsHeader from './ResultsHeader';

function Results({data}) {
    return (
        <div>
            <ResultsHeader />
            <ResultsList data = {data} />
        </div>
    );
}

export default Results;