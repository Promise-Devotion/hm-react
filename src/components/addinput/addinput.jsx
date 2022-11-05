import React, { useRef } from "react";

// import "./addinput.scss";

export default function AddInput(props) {
  const { isInputShow, addItem } = props,
    inputRef = useRef();

  const submitValue = () => {
    const inputValue = inputRef.current.value;
    if (!inputValue.trim()) {
      return;
    } else {
      addItem(inputValue.trim());
    }
  };

  return isInputShow ? (
    <div className="addinput">
      <input type="text" ref={inputRef} placeholder="请输入代办事件" />
      <button className="btn btn-primary" onClick={submitValue}>
        增加
      </button>
    </div>
  ) : (
    ""
  );
}
