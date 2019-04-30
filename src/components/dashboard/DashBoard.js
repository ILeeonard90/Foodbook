import React, { Component } from 'react';
import ShoppingList from './ShoppingList';
import RecipesList from '../recipes/RecipesList';
import IngredientsList from '../ingredients/IngredientsList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class DashBoard extends Component{
    render() {
        const { ingredients, recipes, auth } = this.props;
       if (!auth.uid) {
           return <Redirect to='/signin' />
        }
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m3">
                        <IngredientsList ingredients={ingredients}/>
                    </div>
                    <div className="col s12 m4 offset-m1">
                        <RecipesList recipes={recipes}/>
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
        recipes: state.firestore.ordered.recipes,
        ingredients: state.firestore.ordered.ingredients,
        auth: state.firebase.auth
    }
}
export default compose(
        connect(mapStateToProps),
        firestoreConnect([
            { collection: 'recipes' },
            { collection: 'ingredients'}
        ])
)(DashBoard)