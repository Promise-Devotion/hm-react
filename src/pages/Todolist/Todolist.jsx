import React, { useState } from "react";
// import "./App.css";
// import Header from "../../components/Top";
import AddInput from "../../components/addinput/addinput";
import List from "../../components/List/List";
import Footer from "../../components/Footer/Footer";

export default function Todolist(params) {
  const [todos, setTodos] = useState([
    { id: "0001", name: "吃饭", done: true },
    { id: "0002", name: "睡觉", done: false },
    { id: "0003", name: "踢足球", done: true },
    { id: "0004", name: "逛街", done: false },
  ]);

  const addTodo = (data) => {
    const todaData = todos;
    const newData = [...todaData, { id: "000005", name: data, done: false }];
    setTodos(newData);
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
  };
  const deletetodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  const checkAll = (done) => {
    const newTodo = todos.map((todoobj) => {
      let obj = Object.assign(todoobj, {});
      obj.done = done;
      return obj;
    });
    setTodos(newTodo);
  };
  // 清楚全部已完成的
  const clearAllDone = () => {
    const newTodo = todos.filter((todoobj) => !todoobj.done);
    setTodos(newTodo);
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
