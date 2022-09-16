import React, { Component } from 'react';
import './Item.scss';
import {string} from 'prop-types';

export default class Item extends Component {
  state = {
    mouseFlag: false,
  };
  static propTypes = {
    updateTodo: Function,
    handleDelete: Function,
    todo: Object,
    name: string,
    done: Boolean,
    id: string
  }
  handleCheck = (id) => (event) => {
    this.props.updateTodo(id, event.target.checked);
  };
  deleteItem = (id) => {
    if (window.confirm('确定吗？')) {
      this.props.handleDelete(id);
    }
  };
  handleMouse = (flag) => () => {
    this.setState({ mouseFlag: flag });
  };
  render () {
    const { todo } = this.props;
    // const { mouseFlag } = this.state;
    return (
      <li
        style={{
          backgroundColor: this.state.mouseFlag === true ? 'red' : 'white',
        }}
        className="item-contain"
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <input
          type="checkbox"
          checked={todo.done}
          onChange={this.handleCheck(todo.id)}
        />
        <label>{todo.name}</label>
        <button
          className="button"
          onClick={() => {
            this.deleteItem(todo.id);
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
