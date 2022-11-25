import React, { useState } from "react";
import "./Item.scss";

export default function Item(props) {
  const { todo } = props;

  // mouseFlag: false,
  const [mouseFlag, setmouseFlag] = useState(false);
  const handleCheck = (id) => (event) => {
    props.updateTodo(id, event.target.checked);
  };
  const deleteItem = (id) => {
    if (window.confirm("确定吗？")) {
      props.handleDelete(id);
    }
  };
  const handleMouse = (flag) => () => {
    setmouseFlag(flag);
  };
  return (
    <li
      style={{
        backgroundColor: mouseFlag === true ? "red" : "white",
      }}
      className="item-contain"
      onMouseEnter={handleMouse(true)}
      onMouseLeave={handleMouse(false)}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={handleCheck(todo.id)}
      />
      <label>{todo.name}</label>
      <button
        className="button"
        onClick={() => {
          deleteItem(todo.id);
        }}
      >
        删除
      </button>
    </li>
  );
}
