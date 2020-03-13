import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const todoItemsArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor () {
    super();
    this.state = {
      todoItems: todoItemsArray
    };
  }

    addNewItem = newItemName => {
      const newState = {
        ...this.state,
        todoItems: [
          ...this.state.todoItems,
          {
            task: newItemName,
            id: Date.now(),
            completed:false
          }
        ]
      }
      this.setState(newState);
    }

    toggleCompleted = id => {
      const newState = {
        ...this.state,
        todoItems: this.state.todoItems.map(item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          return item;
        })
      }
      this.setState(newState);
    }

    clearCompleted = () => {
      const newState = {
        ...this.state,
        todoItems: this.state.todoItems.filter(item => {
          return !item.completed;
        })
      }
      this.setState(newState);
    }


  render() {
    return (
      <div className='App'>
        <div className='head'>
          <h1>Web Todo List</h1>
        </div>        
        <TodoForm addNewItem={this.addNewItem} />
        <TodoList 
          todoItems={this.state.todoItems}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>      
    );
  }
}

export default App;
