import React from 'react';

const RecipieDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container">
            <div className="card">
                <div className="card-image">
                    <img src={require("../../food.png")} alt={"no -alt"} />
                    <span className="card-title black-text">Recipie {id}</span>
                </div>
                <div className="card-content black-text">
                    <p>Recipie Description etc .... </p>
                </div>
                <div className="card-action">
                    <p>Recipie Details etc....</p>
                </div>
                </div>
            </div>
    )
}

export default RecipieDetails