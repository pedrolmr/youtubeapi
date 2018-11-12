import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    changeHandler = event => { 
        this.setState({[event.target.name]: event.target.value});
    }
    render(){
        return (
            <div>
                <input
                    name="term"
                    value={this.state.term}
                    onChange={this.changeHandler} 
                />
            </div>
        )
    }
}

export default SearchBar;