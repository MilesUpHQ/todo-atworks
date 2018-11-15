import React from 'react';

class TodoList extends React.Component {

  renderList() {
    return this.props.items.map(function (item) {
      return <li key={item} className="list-group-item">{item}</li>
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    )
  }
}

export default TodoList;