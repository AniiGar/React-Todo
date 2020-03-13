import React from 'react';
import './Todo.css';
import '../App.css';

const Todo = props => {

    // console.log('Todo.js > props', props);

    return(
        <div onClick={e => props.toggleCompleted(props.item.id)}

        className={`item ${props.item.completed  ? ' completed' : ''}`}
        >
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;