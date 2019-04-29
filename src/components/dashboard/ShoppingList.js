import React from 'react';
import ShoppingListItem from './ShoppingListItem';
import AddToShoppingList from './AddToShoppingList';

const ShoppingList = () => {
    return (
        <div className="section">
            <AddToShoppingList />
            <ShoppingListItem />
        </div>
    )
}

export default ShoppingList