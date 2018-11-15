import React from 'react'
import ReactDOM from 'react-dom'

const App = function () {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

const TodoForm = function () {
  return (
    <div className="row">
      <div className="col-8">
        <form className="form-group">
          <input
            type="text"
            placeholder="Add a todo item"
            className="col-6"></input>
        </form>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-primary">Add</button>
      </div>
    </div>
  );
};

const TodoList = function () {
  return (
    <ul className="list-group">
      <li className="list-group-item">Item 1</li>
      <li className="list-group-item">Item 2  </li>
    </ul>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));