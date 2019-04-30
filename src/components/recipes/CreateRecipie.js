import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipie } from '../../store/actions/RecipieActions';

class CreateRecipie extends Component {
    
    state = {
        title: '',
        description: '',
        ingredients: '',
        instructions: '',
        notes: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createRecipie(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create a Recipie</h5>
                    <div className="input-field">
                        <label htmlFor="title">Recipie Name</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="ingredients">Ingredients</label>
                        <input type="text" id="ingredients" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="instructions">Instructions</label>
                        <input type="text" id="instructions" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="notes">Notes</label>
                        <input type="text" id="notes" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRecipie: (recipie) => dispatch(createRecipie(recipie))
    }
}

export default connect(null,mapDispatchToProps)(CreateRecipie)