import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class RecipePage extends Component{
    
    render() {
        const { auth } = this.props;
        if (!auth.uid) {
            return <Redirect to='/signin' />
        }
        return (
            <div className="container">
                <button className="btn pink lighten-1 z-depth-0"><NavLink to='/createrecipe'>Create Recipe
                </NavLink></button> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
} 

export default connect(mapStateToProps)(RecipePage)