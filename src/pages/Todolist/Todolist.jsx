import React, { Component } from "react";
// import "./App.css";
import Header from "../../components/Top";
import List from "../../components/List/List";
import Footer from "../../components/Footer/Footer";

export default class Todolist extends Component {
  state = {
    todos: [
      { id: "0001", name: "吃饭", done: true },
      { id: "0002", name: "睡觉", done: false },
      { id: "0003", name: "踢足球", done: true },
      { id: "0004", name: "逛街", done: false },
    ],
  };
  addTodo = (data) => {
    console.log(data);
    const todaData = this.state.todos;
    const newData = [...todaData, data];
    this.setState({ todos: newData });
  };
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newData = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done };
      } else {
        return item;
      }
    });
    this.setState({ todos: newData });
  };
  deletetodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      todos: newTodos,
    });
  };
  checkAll = (done) => {
    const { todos } = this.state;
    const newTodo = todos.map((todoobj) => {
      return { ...todoobj, done: done };
    });
    this.setState({ todos: newTodo });
  };
  // 清楚全部已完成的
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodo = todos.filter((todoobj) => {
      return !todoobj.done;
    });
    this.setState({ todos: newTodo });
  };
  render() {
    return (
      <div className="app-container">
        <Header addTodo={this.addTodo} />
        <List
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deletetodo={this.deletetodo}
        />
        <Footer
          todos={this.state.todos}
          checkAll={this.checkAll}
          clearAllDone={this.clearAllDone}
        />
      </div>
    );
  }
}
