import React, { Component } from 'react';

class CreateRecipie extends Component {
    
    state = {
        title: '',
        description: '',
        ingredients: '',
        instructions: '',
        notes: ''
    }
    handleChange = (e) => {
        console.log(e);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
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


export default CreateRecipie