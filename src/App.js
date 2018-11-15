import React from 'react';
import TodoForm from './form'
import TodoList from './todo_list'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Buy milk',
        'Call girlfriend',
        'Book a movie'
      ]
    }
  }

  render() {
    return (
      <div>
        <TodoForm />
        <TodoList items={this.state.items} />
      </div>
    );
  }

}

export default App;