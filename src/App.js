import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import MyHeader from "./components/header/header";
import AddInput from "./components/addinput/addinput";
import TodoItem from "./components/todoitem/todoitem";
import Modal from "./components/modal/modal";
import CheckModal from "./components/modal/checkmodal";

function App() {
  const [isInputShow, setIsInputShow] = useState(false),
    [isShowCheckModal, setIsShowCheckModal] = useState(false),
    [todoList, setTodoList] = useState([]),
    [isShowModal, setIsShowModal] = useState(false),
    [currentData, setCurrentData] = useState({});

  /**
   * useEffect的执行是偶顺序的，按照从上到下顺序执行
   */
  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todoData") || "[]");
    setTodoList(todoData);
  }, []);
  useEffect(() => {
    const todoData = JSON.stringify(todoList);
    localStorage.setItem("todoData", todoData);
  }, [todoList]);
  const addItem = useCallback((value) => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      completeFlag: false,
    };
    setTodoList((todoList) => [...todoList, dataItem]);
    setIsInputShow(false);
  }, []);
  const openCheckModal = useCallback(
    (id) => {
      // setCurrentData(() => todoList.filter((item) => item.id === id));

      console.log(currentData);
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
          setCurrentData(todoList[i]);
          setIsShowCheckModal(true);
          console.log(currentData);
        }
      }
    },
    [todoList]
  );
  return (
    <div className="app">
      <CheckModal
        data={currentData}
        isShowCheckModal={isShowCheckModal}
        closeModal={() => setIsShowCheckModal(false)}
      />
      <MyHeader openInput={() => setIsInputShow(!isInputShow)} />{" "}
      <AddInput isInputShow={isInputShow} addItem={addItem} />
      <ul>
        {todoList.map((item, index) => {
          return (
            <TodoItem key={index} data={item} openCheckModal={openCheckModal} />
          );
        })}
      </ul>
      <Modal isShowModal={() => setIsShowModal(isShowModal)} />
    </div>
  );
}

export default App;
