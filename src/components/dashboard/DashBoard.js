import React, { Component } from 'react';
import ShoppingList from './ShoppingList';
import RecipiesList from '../recipes/RecipiesList';
import IngredientsList from '../ingredients/IngredientsList';

class DashBoard extends Component{
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m3">
                        <IngredientsList />
                    </div>
                    <div className="col s12 m4 offset-m1">
                        <RecipiesList />
                    </div>
                    <div className="col s12 m3 offset-m1">
                        <ShoppingList />
                    </div>
                </div>
            </div>
        )
    }
}
export default DashBoard