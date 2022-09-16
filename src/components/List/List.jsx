import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deletetodo: PropTypes.func,
  };
  render () {
    const { todos, updateTodo, deletetodo } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            handleDelete={deletetodo}
          />
        ))}
      </ul>
    );
  }
}
