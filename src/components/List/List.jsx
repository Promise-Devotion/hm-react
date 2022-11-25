import React from "react";
import Item from "../Item/Item";

export default function List(props) {
  // static propTypes = {
  //   todos: PropTypes.array.isRequired,
  //   updateTodo: PropTypes.func.isRequired,
  //   deletetodo: PropTypes.func,
  // };
  const { todos, updateTodo, deletetodo } = props;
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
