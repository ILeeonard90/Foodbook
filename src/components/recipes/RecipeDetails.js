import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const RecipeDetails = (props) => {
    const { recipe, auth } = props;
    if (!auth.uid) {
        return <Redirect to='/signin' />
    }else if (recipe) {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-image">
                        <img src={require("../../food.png")} alt={"no -alt"} />
                        <span className="card-title black-text">{recipe.title} </span>
                    </div>
                    <div className="card-content black-text">
                        <p>{recipe.description}</p>
                    </div>
                    <div className="card-content black-text">
                        <p>{recipe.ingredients}</p>
                    </div>
                    <div className="card-action">
                        <p>{recipe.instructions}</p>
                    </div>
                    <div className="card-action">
                        <p>{recipe.notes}</p>
                    </div>
                </div>
            </div> 
        )
    } else {
        return (
            <div className="container center">
                <p>Loading recipe....</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const recipes = state.firestore.data.recipes;
    const recipe = recipes ? recipes[id] : null;
    return {
        recipe: recipe,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'recipes' } 
    ])
)(RecipeDetails)