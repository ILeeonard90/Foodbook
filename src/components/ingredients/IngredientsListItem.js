import React from 'react';

const IngredientsListItem = () => {
    return (
        <li className="collection-item avatar">
            <i className="material-icons circle">food</i>
            <span className="title">Ingredient name</span>
            <p>Amount : ? </p>
        </li>
    )
}

export default IngredientsListItem