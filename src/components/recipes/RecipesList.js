import React from 'react';
import RecipesListItem from './RecipesListItem';

const RecipesList = ({ recipes }) => {
    return (
        <div className="section">
            <div className="row">
                {recipes && recipes.map(recipe => {
                    return (
                        <RecipesListItem recipe={recipe} key={recipe.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default RecipesList