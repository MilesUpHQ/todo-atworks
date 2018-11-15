import React from 'react';
import TodoItem from './todo_item';

class TodoList extends React.Component {
  render() {
    return (
      <ul className="list-group">
        <TodoItem />
      </ul>
    )
  }
}

export default TodoList;