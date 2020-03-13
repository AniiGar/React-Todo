// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import '../App.css';

const TodoList = props => {

    // console.log('TodoList.js > props', props);

    return(
        <div>
           {props.todoItems.map(item => (
               <Todo 
                    key={item.id}
                    item={item}
                    toggleCompleted={props.toggleCompleted}
               />
           ))} 
           <button className='btn clearBtn' onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default TodoList;