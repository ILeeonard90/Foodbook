import React from 'react';
import RecipiesListItem from './RecipiesListItem';

const RecipiesList = ({ recipies }) => {
    return (
        <div className="section">
            <div className="row">
                {recipies && recipies.map(recipie => {
                    return (
                        <RecipiesListItem recipie={recipie} key={recipie.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default RecipiesList