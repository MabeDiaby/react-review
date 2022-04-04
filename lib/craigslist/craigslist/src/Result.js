import React from 'react';

function Result({data}) {
    return (
        <div className = "cards">
            <img className="cardImg" src={data.image} />
            <h1 className="title">{data.title}</h1>
            <h1 className="cost">$ {data.cost}</h1>
        </div>
    );
}

export default Result;