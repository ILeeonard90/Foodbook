import React from 'react';

const IngredientsListItem = ({ ingredient }) => {
    return (
        <li className="collection-item avatar">
            <i className="material-icons circle">food</i>
            <span className="title">{ingredient.title}</span>
            <p>Amount : {ingredient.amount} </p>
            <p>Amount : {ingredient.bbf} </p>
        </li>
    )
}

export default IngredientsListItem