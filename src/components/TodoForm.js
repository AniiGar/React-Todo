import React from 'react';
import '../App.css';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newItem: ''
        };
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            newItem: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
    }

    render () {

        // console.log('TodoForm.js > state > newItem:', this.state.newItem);

        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleChange} 
                type='text'
                name='task'
                value={this.state.newItem}
                />
                <button className='btn' >Add</button>
            </form>
        )
    }
}

export default TodoForm;