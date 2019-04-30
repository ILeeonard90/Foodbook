import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class RecipiePage extends Component{
    
    render() {
        return (
            <div className="container">
                <button className="btn pink lighten-1 z-depth-0"><NavLink to='/createrecipie'>Create Recipie
                </NavLink></button> 
            </div>
        )
    }
}

export default RecipiePage