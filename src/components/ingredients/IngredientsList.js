import React from 'react';
import IngredientsListItem from './IngredientsListItem';

const IngredientsList = () => {
    return (
        <div className="section">
            <ul className="collection">
                <IngredientsListItem />
            </ul>
        </div>
    )
}

export default IngredientsList