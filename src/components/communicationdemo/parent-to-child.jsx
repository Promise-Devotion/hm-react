import React from "react";

export default function ToChild(props) {
  return (
    <div>
      <p>{props.name}</p>
      <div>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.school}</li>
      </div>
    </div>
  );
}
