import React from "react";

import "./todoitem.scss";

function TodoItem(props) {
  const { data, openCheckModal } = props;
  return (
    <li className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={data.completeFlag}
          onChange={() => !data.completeFlag}
        />{" "}
        <span> {data.content} </span>{" "}
        <div className="btn-group">
          <button
            className="btn btn-primary"
            onClick={() => openCheckModal(data.id)}
          >
            {" "}
            查看{" "}
          </button>{" "}
          <button className="btn btn-warning"> 编辑 </button>{" "}
          <button className="btn btn-danger"> 删除 </button>{" "}
        </div>{" "}
      </div>{" "}
    </li>
  );
}

export default TodoItem;
