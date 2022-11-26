import React, { useState } from "react";
import { nanoid } from "nanoid";
// import "./App.css";
// import Header from "../../components/Top";
import AddInput from "../../components/addinput/addinput";
import List from "../../components/List/List";
import Footer from "../../components/Footer/Footer";

export default function Todolist(params) {
  let arr = localStorage.getItem("todos");
  if (arr) {
    arr = JSON.parse(arr);
  } else {
    arr = [];
  }
  const [todos, setTodos] = useState(arr);

  const addTodo = (data) => {
    const todaData = todos;
    const newData = [...todaData, { id: nanoid(), name: data, done: false }];
    setTodos(newData);
    localStorage.setItem("todos", JSON.stringify(newData));
  };
  const updateTodo = (id, done) => {
    const newData = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done };
      } else {
        return item;
      }
    });
    setTodos(newData);
    localStorage.setItem("todos", JSON.stringify(newData));
  };
  const deletetodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const checkAll = (done) => {
    const newTodo = todos.map((todoobj) => {
      let obj = Object.assign(todoobj, {});
      obj.done = done;
      return obj;
    });
    setTodos(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  };
  // 清楚全部已完成的
  const clearAllDone = () => {
    const newTodo = todos.filter((todoobj) => !todoobj.done);
    setTodos(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  };
  return (
    <div className="app-container">
      {/* {todos.map((value, key) => (
        <p key={key}>{value.name}</p>
      ))} */}
      <AddInput addItem={addTodo} />
      <List todos={todos} updateTodo={updateTodo} deletetodo={deletetodo} />
      <Footer todos={todos} checkAll={checkAll} clearAllDone={clearAllDone} />
    </div>
  );
}
