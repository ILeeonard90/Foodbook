import React, { Component } from 'react';
import ShoppingList from './ShoppingList';
import RecipiesList from '../recipes/RecipiesList';
import IngredientsList from '../ingredients/IngredientsList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class DashBoard extends Component{
    render() {
        const { ingredients } = this.props;
        const { recipies } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m3">
                        <IngredientsList ingredients={ingredients}/>
                    </div>
                    <div className="col s12 m4 offset-m1">
                        <RecipiesList recipies={recipies}/>
                    </div>
                    <div className="col s12 m3 offset-m1">
                        <ShoppingList />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        recipies: state.recipies.recipies,
        ingredients: state.ingredients.ingredients
    }
}
export default compose(
        connect(mapStateToProps),
        firestoreConnect([
            { collection: 'recipes' }
        ])
)(DashBoard)