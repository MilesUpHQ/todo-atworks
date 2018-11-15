import React from 'react';

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

export default TodoForm;