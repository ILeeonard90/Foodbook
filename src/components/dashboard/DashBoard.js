import React, { Component } from 'react';
import ShoppingList from './ShoppingList';
import RecipesList from '../recipes/RecipesList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class DashBoard extends Component{
    render() {
        const { auth } = this.props;
       if (!auth.uid) {
           return <Redirect to='/signin' />
        }else{
            const { recipes } = this.props;
            return (
                <div className="dashboard container">
                    <div className="row">
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
}

const mapStateToProps = (state) => {
    console.log(state);
        if(state.firestore.ordered.recipes){
            return {
                recipes: state.firestore.ordered.recipes,
                auth: state.firebase.auth
            }
        }else{
            return { auth: state.firebase.auth }
        }
    }


    
export default compose(
        connect(mapStateToProps),
        firestoreConnect(props => {
            if(props.auth.uid){  
                return [
                    {   collection: props.auth.uid,
                        doc: 'private',
                        subcollections: [
                            { collection: 'recipes'}
                        ]
                    }
                ]
            }else{
                return [
                    { collection: 'ads' }
                ]
            }
        })
)(DashBoard)