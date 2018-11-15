import React from 'react'
import ReactDOM from 'react-dom'

const App = function () {
  return (
    <div>
      <TodoForm />
    </div>
  );
};

const TodoForm = function () {
  return (
    <div>
      <form className="form-group">
        <input
          type="text"
          placeholder="Add a todo item"
          className="form-control"></input>
      </form>
      <button className="btn btn-primary">Add</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));