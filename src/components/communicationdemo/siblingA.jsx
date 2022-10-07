import React from "react";

export default function SiblingA(params) {
  const clickBtn = () => {
    let obj = {
      name: "Lucy",
      age: 19,
      school: "温哥华大学",
    };
    params.patchPerson(obj);
  };
  return (
    <div>
      <p>SiblingA</p>
      <button
        onClick={() => {
          clickBtn();
        }}
      >
        点击传值给父组件
      </button>
    </div>
  );
}
