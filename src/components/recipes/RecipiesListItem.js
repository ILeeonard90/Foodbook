import React from 'react';
import { NavLink } from 'react-router-dom';

const RecipiesListItem = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={require("../../food.png")} alt={"no -alt"} />
                <span className="card-title">Recipie name</span>
            </div>
            <div className="card-content">
                <p>Recipie Description etc ....</p>
            </div>
            <div className="card-action">
                <NavLink to='/'> To Recipie Details</NavLink>
            </div>
        </div>
    )
}

export default RecipiesListItem