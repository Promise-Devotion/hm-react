import React from "react";

export default function ToParent(props) {
  console.log(props);
  return (
    <div>
      <p>子组件点击向父组件传值</p>
      <div>
        <button
          onClick={() => {
            props.patchPerson({ name: "hanmeimei" });
          }}
        >
          改变父组件person的名字
        </button>
        <button
          onClick={() => {
            props.patchPerson({ school: "家里蹲大学" });
          }}
        >
          改变父组件person的学校
        </button>
      </div>
    </div>
  );
}
