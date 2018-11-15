import React from 'react';
import TodoForm from './form'
import TodoList from './todo_list'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    }
  }

  render() {
    return (
      <div>
        <TodoForm />
        <TodoList />
      </div>
    );
  }

}

export default App;