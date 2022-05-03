import React, { useState } from "react";

function Example2() {
  const [age, setAge] = useState(20);
  const [sex, setSex] = useState("男");
  const [work, setWork] = useState("前端程序员");
  return (
    <div>
      <p> 我今年： {age} </p> <p> {sex} </p> <p> {work} </p>{" "}
    </div>
  );
}

export default Example2;
