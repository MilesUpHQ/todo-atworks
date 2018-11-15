import React from 'react';
import TodoForm from './form'
import TodoList from './todo_list'

const App = function () {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;