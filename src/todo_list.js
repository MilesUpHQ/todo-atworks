import React from 'react';
import TodoItem from './todo_item';

const TodoList = function () {
  return (
    <ul className="list-group">
      <TodoItem />
    </ul>
  )
}

export default TodoList;