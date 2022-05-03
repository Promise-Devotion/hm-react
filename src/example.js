import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0); // 数组解构，返回Returns a stateful value, and a function to update it.
  useEffect(() => {
    console.log("button clicked");
  }, [count]);
  return (
    <div>
      <p>You clicked {count}次</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
}

export default Example;
