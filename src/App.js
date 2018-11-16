import React from 'react';
import TodoForm from './form'
import TodoList from './todo_list'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addTodo(item) {
    this.setState({
      items: [...this.state.items, item]
    })
  }

  removeItem(item) {
    const index = this.state.items.indexOf(item)
    console.log(index);
    const filteredItems = this.state.items.filter(function (item) {
      return item !== this.state.items[index]
    }, this)
    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList items={this.state.items} handleClick={this.removeItem.bind(this)} />
      </div>
    );
  }

}

export default App;