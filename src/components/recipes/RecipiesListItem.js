import React from 'react';
import { NavLink } from 'react-router-dom';

const RecipiesListItem = ({recipie}) => {
    return (
        <div className="col s12" >
            <div className="card">
                <div className="card-image">
                    <img src={require("../../food.png")} alt={"no -alt"} />
                    <span className="card-title">{recipie.title}</span>
                </div>
                <div className="card-content">
                    <p>{recipie.title}</p>
                </div>
                <div className="card-action">
                    <NavLink to='/'> To Recipie Details</NavLink>
                </div>
            </div>
        </div>
    )
}

export default RecipiesListItem