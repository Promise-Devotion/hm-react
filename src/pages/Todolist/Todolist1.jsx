import React, { Component } from "react";
// import "./App.css";
// import Header from "../../components/Top";
import AddInput from "../../components/addinput/addinput";
import List from "../../components/List/List";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

export default class Todolist extends Component {
  state = {
    todos: [
      { id: "0001", name: "吃饭", done: true },
      { id: "0002", name: "睡觉", done: false },
      { id: "0003", name: "踢足球", done: true },
      { id: "0004", name: "逛街", done: false },
    ],
    list: [],
  };
  // 生命周期钩子componentDidMount 请求数据
  componentDidMount() {
    // this.getList();
  }
  getList = () => {
    const baseUrl = "http://127.0.0.1:5000/api";
    const url = `${baseUrl}/users/userlist?name=jim`;
    axios.get(url).then((res) => {
      const oldData = this.state.list;
      const newList = [...oldData, ...res.data.data]; // list.push(list, res.data.data.list);
      this.setState({ list: newList });
    });
  };
  addTodo = (data) => {
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
    const newTodos = todos.filter((item) => item.id !== id);
    this.setState({
      todos: newTodos,
    });
  };
  checkAll = (done) => {
    const { todos } = this.state;
    const newTodo = todos.map((todoobj) => {
      let obj = Object.assign(todoobj, {});
      obj.done = done;
      return obj;
    });
    this.setState({ todos: newTodo });
  };
  // 清楚全部已完成的
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodo = todos.filter((todoobj) => !todoobj.done);
    this.setState({ todos: newTodo });
  };
  render() {
    const { list } = this.state;
    console.log(this.state);
    return (
      <div className="app-container">
        {list.map((value, key) => (
          <p key={key}>{value.name}</p>
        ))}
        <AddInput addTodo={this.addTodo} />
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
