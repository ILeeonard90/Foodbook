import React from 'react';
import { Link } from 'react-router-dom';

const RecipesListItem = ({recipe}) => {
    return (
        <div className="col s12" >
            <div className="card">
                <div className="card-image">
                    <img src={require("../../food.png")} alt={"no -alt"} />
                    <span className="card-title">{recipe.title}</span>
                </div>
                <div className="card-content">
                    <p>{recipe.title}</p>
                </div>
                <div className="card-action">
                    <Link to={'/recipe/' + recipe.id}> To Recipe Details</Link>
                </div>
            </div>
        </div>
    )
}

export default RecipesListItem