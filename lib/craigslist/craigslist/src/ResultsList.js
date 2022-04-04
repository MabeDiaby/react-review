import React from 'react';
import Result from './Result';
// import Results from './Results'


function ResultsList({data}) {
    
    return (
        <div className="container">
            {data.map(result => {
                return <Result data = {result} />
            })}
        </div>
    );
}

export default ResultsList;