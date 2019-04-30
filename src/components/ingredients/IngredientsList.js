import React from 'react';
import IngredientsListItem from './IngredientsListItem';

const IngredientsList = ({ ingredients }) => {
    return (
        <div className="section">
            <ul className="collection">
                {ingredients && ingredients.map(ingredient => {
                    return (
                        <IngredientsListItem ingredient={ingredient} key={ingredient.id}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default IngredientsList