import React from "react";
import { useState } from "react";
import ToChild from "../../../../components/communicationdemo/parent-to-child";

export default function ParentToChild(params) {
  const [person, setPerson] = useState({
    name: "jim",
    age: 18,
    school: "哈弗大学",
  });
  const changeAge = () => {
    const obj = { ...person, age: 20 };
    setPerson(obj);
  };
  return (
    <div>
      <div>communicationdemo demo</div>
      <div>
        <button onClick={changeAge}>改变jim 年龄</button>
        <ToChild name="父组件向子组件传递" {...person} />
      </div>
    </div>
  );
}
