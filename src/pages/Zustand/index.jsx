import React from "react";
import { useState } from "react";
import { useTitleStore } from "../../store/header";
import "./index.scss";
export default function ZustandComponent(params) {
  let color = useTitleStore((state) => state.color);
  let [backColor, setBackColor] = useState(color);
  const toogleColor = useTitleStore((state) => state.toogleColor);
  const changeTitleColor = () => {
    // 20b2aa
    backColor = "#20b2aa";
    setBackColor(backColor);
    toogleColor(backColor);
  };
  return (
    <div className="zustand-contain">
      <h3 className="component-title">zustand使用</h3>
      <div>
        <h3>demo1</h3>
        <p>zustand创建一个store，存储数据，显示在header上面</p>
        <div>
          <button
            style={{ backgroundColor: backColor }}
            onClick={changeTitleColor}
          >
            点击修改一个数据，header组件中title发生变化
          </button>
        </div>
      </div>
    </div>
  );
}
