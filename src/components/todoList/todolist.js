import React from "react";

function TodoList(props) {
  // const {todolist} = props
  return (
    <div>
      <ul>
        <li>
          <input type="checkbox" />
          <span> {"任务名字"} </span>
          <button>查看</button>
          <button>编辑</button>
          <button>删除</button>
        </li>{" "}
      </ul>{" "}
    </div>
  );
}

export default TodoList;
